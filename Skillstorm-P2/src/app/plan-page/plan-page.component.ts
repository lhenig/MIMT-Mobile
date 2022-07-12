import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { Plan } from '../models/plan.model';
import { PlanService } from '../services/plan.service';
=======
>>>>>>> d98b5e5a68c1aab5a13529749268c417e290d67a

@Component({
  selector: 'app-plan-page',
  templateUrl: './plan-page.component.html',
  styleUrls: ['./plan-page.component.css']
})
export class PlanPageComponent implements OnInit {
<<<<<<< HEAD
  PlanList: Plan[] = [];

  constructor(private planService: PlanService, private router: Router) { }

  ngOnInit(): void {
    this.planService.findAllPlans().subscribe((data) => {
      //console.log("body: " + data.body);
      if (data.body != null) {
        this.PlanList = data.body;
      }
    });
=======

  constructor() { }

  ngOnInit(): void {
>>>>>>> d98b5e5a68c1aab5a13529749268c417e290d67a
  }

}
