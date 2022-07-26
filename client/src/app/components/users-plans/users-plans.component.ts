import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Device } from 'src/app/models/device.model';
import { Plan } from 'src/app/models/plan.model';
import { User } from 'src/app/models/user.model';
import { DeviceService } from 'src/app/services/device.service';
import { PlanService } from 'src/app/services/plan.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-plans',
  templateUrl: './users-plans.component.html',
  styleUrls: ['./users-plans.component.css']
})
export class UsersPlansComponent implements OnInit {
  Plans: Plan[] = [];
  Device?: Device;



  @Input() User?: User;

  constructor(private planService: PlanService, private deviceService: DeviceService, private userService: UserService, private router: Router) { }

  //CHANGE THIS
  ngOnInit(): void {

    this.userService.findUser().subscribe(data => {
      if (data.body != null)
      sessionStorage.setItem('userId', data.body?.id.toString());

      this.planService.findPlansByUser(JSON.parse(sessionStorage.getItem('userId') || '{}')).subscribe((data) => {
        if (data.body != null) {
          this.Plans = data.body;
          for (let i = 0; i < this.Plans.length; i++) {
            this.deviceService.findDevicesByPlan(this.Plans[i].id).subscribe((data) => {
              if (data.body != null) {
                this.Device = data.body;
                console.log(data.body);
              }
            });
          }
        }
      });
    })



  };




}
