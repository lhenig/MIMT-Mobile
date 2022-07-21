import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from 'src/app/models/device.model';
import { Plan } from 'src/app/models/plan.model';
import { User } from 'src/app/models/user.model';
import { DeviceService } from 'src/app/services/device.service';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-users-plans',
  templateUrl: './users-plans.component.html',
  styleUrls: ['./users-plans.component.css']
})
export class UsersPlansComponent implements OnInit {
  Devices?: Device[]=[];

  @Input() User?: User;

  constructor(private planService: PlanService, private deviceService: DeviceService, private router: Router) { }

  //CHANGE THIS
  ngOnInit(): void {
    // this.deviceService.findDevicesByUser(1).subscribe((data) => {
    //   if (data.body != null) {
    //     console.log(data.body);
    //     //STUFF WITH DATA HERE
    //     this.Devices?.push(data.body);
    // }});
  };
  

  

  }
