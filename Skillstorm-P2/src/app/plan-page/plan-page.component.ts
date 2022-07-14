import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from '../models/plan.model';
import { PlanService } from '../services/plan.service';

@Component({
  selector: 'app-plan-page',
  templateUrl: './plan-page.component.html',
  styleUrls: ['./plan-page.component.css']
})
export class PlanPageComponent implements OnInit {
  PlanList: Plan[] = [];

  constructor(private planService: PlanService, private router: Router) { }

  ngOnInit(): void {
    this.planService.findAllPlans().subscribe((data) => {
      //console.log("body: " + data.body);
      if (data.body != null) {
        this.PlanList = data.body;
      }
    });
  }

}
