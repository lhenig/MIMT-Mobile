import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
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
  NewDevices: Device[] = [];


  constructor(private planService: PlanService, private deviceService: DeviceService, private route: ActivatedRoute) {
  }

  updatePlan(){
    this.route.params.subscribe(params=>{
      let phoneDiv = document.querySelectorAll('[id=phone]');
      let phoneNumbers = [];
      let modelDiv = document.querySelectorAll('[id=model]');
      let models = [];
      let NewDevices = [];
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
        for (let i = 0; i < phoneNumbers.length; i++) {
          alert("Phone Number: " + this.Devices[i].phoneNumber + "\n Phonemodel: " + this.Devices[i].deviceName + "\nPlan ID: " + this.Devices[i].planId);
        }


        //UPDATE DEVICES HERE
        // the plan ID is tied to params['id']
        // and the updated list of devices is in NewDevices


      });
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
  decr(){
    let curPhones = document.getElementById("curPhones");
    if(curPhones){
      if(this.Devices.length > 1){
        curPhones.innerHTML = String(Number(curPhones.innerHTML) - 1);
        this.Devices.pop();
      }

    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      let id = params['id'];
      this.planService.findPlanById(id).subscribe((data) => {
        if(data.body != null){
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



}
