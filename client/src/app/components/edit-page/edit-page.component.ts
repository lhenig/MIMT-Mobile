import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  phones: string[] = [""];
  constructor() { }

  updatePlan(){
    /* TODO */
  }

  planType(planName: string){
    if(planName == "MINIMAL"){
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
    if(planName == "BASIC"){
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
    if(planName == "ULTRA"){
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

  ngOnInit(): void {
    this.planType('ULTRA');
  }

}
