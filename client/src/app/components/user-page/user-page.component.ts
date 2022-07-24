import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from 'src/app/models/device.model';
import { User } from 'src/app/models/user.model';
import { DeviceService } from 'src/app/services/device.service';
import { PlanService } from 'src/app/services/plan.service';
import { AppService } from 'src/app/services/app.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  //not sure how to do with login so I'm gonna wait on this one
  User?: User;
  Devices?: Device[]=[];
  // User.id: number;

  constructor(private userService: UserService, private deviceService: DeviceService, private router: Router) { }

  ngOnInit(): void {

    this.userService.findUser().subscribe((data)=>{
      if (data.body != null) {
        console.log(data.body);
        //STUFF WITH DATA HERE
        this.User = data.body;
        
      }
    })
    
  }

}
