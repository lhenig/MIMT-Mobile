import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserStateService } from 'src/app/services/user-state.service';
import { UserService } from 'src/app/services/user.service';
// import { AppService } from 'src/app/services/app.service';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  //not sure how to do with login so I'm gonna wait on this one
  User?: User;
  // User.id: number;

  constructor(private router: Router, private userService: UserService, private userStateService: UserStateService) { }

  ngOnInit() {
    this.userService.findUser().subscribe((data)=>{
      if (data.body != null) {
        console.log(data.body);
        //STUFF WITH DATA HERE
        this.User = data.body;
        this.userStateService.changeUser(this.User)
      }
      
      
    });
  }

}
