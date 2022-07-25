import { LiteralMapExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from 'src/app/models/plan.model';
import { PlanService } from 'src/app/services/plan.service';



@Component({
  selector: 'app-plan-page',
  templateUrl: './plan-page.component.html',
  styleUrls: ['./plan-page.component.css']
})
export class PlanPageComponent implements OnInit {
  userId = JSON.parse(localStorage.getItem('userId') || '{}');
  Plan: Plan = new Plan("noplan", 0, 0.0, this.userId);
  mimtPlan: string = "noplan";
  phones: string[] = [""];
  
  constructor(private planService: PlanService, private router: Router) { }


  incr() {
    let curPhones = document.getElementById("curPhones");
    let maxPhones = document.getElementById("maxPhones");
    if(curPhones && maxPhones){
      if(Number(curPhones.innerHTML) < Number(maxPhones.innerHTML)){
        curPhones.innerHTML = String(Number(curPhones.innerHTML) + 1);
        this.phones.push("");
      }
    }
  }
  decr(){
    let curPhones = document.getElementById("curPhones");
    if(curPhones){
      if(this.phones.length > 1){
        curPhones.innerHTML = String(Number(curPhones.innerHTML) - 1);
        this.phones.pop();
      }

    }
  }

  selectPlan(p: string){
    var plan1 = document.getElementById("plan1");
    var plan2 = document.getElementById("plan2");
    var plan3 = document.getElementById("plan3");    
    if(p == 'MINIMAL'){
      this.mimtPlan = 'MINIMAL';
      plan1?.classList.add('selected');
      let curPhones = document.getElementById("curPhones");
      let maxPhones = document.getElementById("maxPhones");
      if(curPhones && maxPhones){
        maxPhones.innerHTML = "1";
        curPhones.innerHTML = "1";

      }
      while(this.phones.length > 1){
        this.phones.pop();
      }
      this.Plan.planName = "Minimal";
      this.Plan.price = 20.99;
      this.Plan.deviceLimit = 1;
    }
    else{
      plan1?.classList.remove('selected');
    } 
    if(p == 'BASIC'){
      this.mimtPlan = 'BASIC';
      plan2?.classList.add('selected');
      let curPhones = document.getElementById("curPhones");
      let maxPhones = document.getElementById("maxPhones");
      if(curPhones && maxPhones){
        maxPhones.innerHTML = "5";


      
        while(this.phones.length > 5){
          this.phones.pop();
          curPhones.innerHTML = "5";
        }
      }
      this.Plan.planName = "Basic";
      this.Plan.price = 60.99;
      this.Plan.deviceLimit = 5;
    }
    else{
      plan2?.classList.remove('selected');
    }
    if(p == 'ULTRA'){
      this.mimtPlan = 'ULTRA';
      plan3?.classList.add('selected');
      let curPhones = document.getElementById("curPhones");
      let maxPhones = document.getElementById("maxPhones");
      if(curPhones && maxPhones){
        
        maxPhones.innerHTML = "12";

      }
      this.Plan.planName = "Ultra";
      this.Plan.price = 110.99;
      this.Plan.deviceLimit = 12;
    }
    else{
      plan3?.classList.remove('selected');
    }
  }
  submitPlan(){
    let phoneDiv = document.querySelectorAll('[id=phone]');
    let phoneNumbers = [];
    console.log(phoneDiv);
    for(let i = 0 ; i < phoneDiv.length; i++){
      if((phoneDiv[i] as HTMLInputElement).value == ""){
        alert("compleate phone number input");
        return;
      }
      phoneNumbers.push((phoneDiv[i] as HTMLInputElement).value);
    }
    let modelDiv = document.querySelectorAll('[id=model]');
    let models = [];
    for(let i = 0 ; i < modelDiv.length; i++){
      if((modelDiv[i] as HTMLInputElement).value == ""){
        alert("compleate model input");
        return;
      }
      models.push((modelDiv[i] as HTMLInputElement).value);
    }
    if(this.mimtPlan == "noplan"){
      alert('please select a plan');
    }
    else{
      
      alert(`PlanName: ${this.mimtPlan} \n`)
      for(let i = 0 ; i < phoneNumbers.length; i++){
          alert("Phone Number: " + phoneNumbers[i] + "\n Phonemodel: " + models[i]);

      }

      // Saves Plan to database
      this.planService.savePlan(this.Plan).subscribe(data => {
        console.log(data.body);
      });
      //////////////////////////////////////////////////////////////
      //  This is where a new plan request is sent to database    //
      //  plan name is in this.mimtPlan                           //
      //  phone nums and phone models are in parallel arrays      //
      //  there is no validation other than checking for ""       //
      //  and making sure a plan is selected                      //
      //////////////////////////////////////////////////////////////
    }
  }

  ngOnInit(): void {
    this.planService.findPlansByUser(this.userId).subscribe((data) => {
      // logs all plans for current user
      //console.log(data.body);
      if (data.body != null) {
        //this.Plan = data.body;
      }
    });
  }

}
