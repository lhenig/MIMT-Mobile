import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PlanService } from 'src/app/services/plan.service';
import { DeviceService } from 'src/app/services/device.service';
import { Plan } from 'src/app/models/plan.model';
import { Device } from 'src/app/models/device.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})



export class EditPageComponent implements OnInit {

  phones: string[] = [""];
  Plan: Plan | undefined;
  Devices: Device[] = [];
  errorMsg: string ='';
  warningMsg: string = '';
  dup: boolean = false;

  constructor(private planService: PlanService, private deviceService: DeviceService, private route: ActivatedRoute, private router: Router) {
  }

  updatePlan(){
    if (!this.dup){
    let phoneDiv = document.querySelectorAll('[id=phone]');
      let phoneNumbers = [];
      let modelDiv = document.querySelectorAll('[id=model]');
      let models = [];

    let NewDevices: Device[] = [];
    this.route.params.subscribe(params=>{

      for (let i = 0; i < phoneDiv.length; i++) {
        if ((phoneDiv[i] as HTMLInputElement).value == "") {
          alert("compleate phone number input");
          return;
        }
        phoneNumbers.push((phoneDiv[i] as HTMLInputElement).value);

        if ((modelDiv[i] as HTMLInputElement).value == "") {
          alert("compleate model input");
          return;
        }
        models.push((modelDiv[i] as HTMLInputElement).value);

        NewDevices.push(new Device((modelDiv[i] as HTMLInputElement).value, (phoneDiv[i] as HTMLInputElement).value, params['id']))
      }

        for (let i = 0; i <= this.Devices.length - 1; i++) {
          //alert("Phone Number: " + this.Devices[i].phoneNumber + "\n Phonemodel: " + this.Devices[i].deviceName + "\nPlan ID: " + this.Devices[i].planId);
          if(this.Devices[i].phoneNumber == ''){
            this.deviceService.saveDevice(NewDevices[i]).subscribe(data => {
              this.router.navigateByUrl('/user');
            }, (error:Error)=>{
              this.errorMsg = this.handleError(error);
            });
          }
          else {
            this.deviceService.updateDevice(NewDevices[i], this.Devices[i].id).subscribe(data => {
              this.router.navigateByUrl('/user');
            }, (error:Error)=>{
              this.errorMsg = this.handleError(error);
            });
          }

        }

        //UPDATE DEVICES HERE
        // the plan ID is tied to params['id']
        // and the updated list of devices is in NewDevices
      
      })};
  }

  deleteDevice(deviceId: number, indexOf: number): void{
    let curPhones = document.getElementById("curPhones");

    if(deviceId){
      this.deviceService.deleteDevice(deviceId).subscribe(data => {
        this.Devices.splice(indexOf, 1);
      });
    }
    else {
      this.Devices.splice(indexOf, 1);
    }
    if(curPhones)
      curPhones.innerHTML = String(Number(curPhones.innerHTML) - 1)

  }


  planType(planName: string){

    if(planName == "Minimal"){
      var plan1 = document.getElementById("plan1");
      plan1?.classList.add('selected');

      let maxPhones = document.getElementById("maxPhones");
      if(maxPhones){
        maxPhones.innerHTML = "1";
      }
    }
    else{
      var plan1 = document.getElementById("plan1");
      plan1?.classList.add('no-select');
    }
    if(planName == "Basic"){
      var plan2 = document.getElementById("plan2");
      plan2?.classList.add('selected');

      let maxPhones = document.getElementById("maxPhones");
      if(maxPhones){
        maxPhones.innerHTML = "5";
      }
    }
    else{
      var plan2 = document.getElementById("plan2");
      plan2?.classList.add('no-select');
    }
    if(planName == "Ultra"){
      var plan3 = document.getElementById("plan3");
      plan3?.classList.add('selected');
      let maxPhones = document.getElementById("maxPhones");
      if(maxPhones){
        maxPhones.innerHTML = "12";
      }
    }
    else{
      var plan3 = document.getElementById("plan3");
      plan3?.classList.add('no-select');
    }


  }
  incr() {
    let curPhones = document.getElementById("curPhones");
    let maxPhones = document.getElementById("maxPhones");
    if(curPhones && maxPhones){
      if(Number(curPhones.innerHTML) < Number(maxPhones.innerHTML)){
        curPhones.innerHTML = String(Number(curPhones.innerHTML) + 1);
        this.Devices.push(new Device("", "" , -1));
      }
    }
  }


  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      let id = params['id'];
      this.planService.findPlanById(id).subscribe((data) => {

        if(data.body != null){
          this.Plan = data.body;
          this.planType(data.body.planName);
          this.deviceService.findDevicesByPlan(id).subscribe((data) => {
            if (data.body != null) {
              this.Devices = data.body;
              for(let i = 0; i < this.Devices.length-1; i++){
                this.phones.push("");
              }
              let curPhones = document.getElementById("curPhones");
              if(curPhones){
                curPhones.innerHTML = String(this.phones.length);
              }
              console.log(this.Devices);
              console.log('before');
              let modelDiv = document.querySelectorAll('[id=model]');
              let phoneDiv = document.querySelectorAll('[id=phone]');
              for (let i = 0; i < phoneDiv.length; i++) {
                console.log(this.Devices[i].phoneNumber);
                (phoneDiv[i] as HTMLInputElement).value = this.Devices[i].phoneNumber;
                (modelDiv[i] as HTMLInputElement).value = this.Devices[i].deviceName;
              }
            }
          });
        }
      });
    });
  }

  handleError(error:any) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = 'Unexpected Error';
    } else {
      msg = 'ERROR: Phone number(s) already tied to a different plan.'
    }
    console.log(msg);
    this.errorMsg! = msg;
    return msg;
  }

  changeHandler() {
    let phoneDiv = document.querySelectorAll('[id=phone]');
    let phoneNumbers: string[] = [];

    for (let i = 0; i < phoneDiv.length; i++) {
      if ((phoneDiv[i] as HTMLInputElement).value != ''){
        phoneNumbers.push((phoneDiv[i] as HTMLInputElement).value);
      }
    }
    
    let dup = false;
    dup = phoneNumbers.some((element, index)=>{
      return phoneNumbers.indexOf(element) !== index
    });
    if (dup) {
      this.warningMsg = 'ERROR: Duplicate numbers';
      this.dup = true;
    } else {
      this.warningMsg = '';
      this.dup = false;
    }
  }

}
