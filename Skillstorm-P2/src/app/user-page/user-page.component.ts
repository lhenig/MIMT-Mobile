import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  //not sure how to do with login so I'm gonna wait on this one
  Users!: User;
  

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    
    console.log("From user component")
    this.userService.findUsers().subscribe((data)=>{
      if (data.body != null) {
        //STUFF WITH DATA HERE
        // this.User = data.body;
        console.log(data.body)
      }
      else{
        console.log("error")
      }
    })
  }

}
