import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  newUser: User = new User ("", "", "", [], []); 

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    if (this.newUser.name.trim() != "" && this.newUser.email != "") {
      //send the forms values
      this.userService.saveUser(this.newUser).subscribe(data => {
        let route = this.router.config.find(r => r.path === 'users');
        if (route) {
          this.router.navigateByUrl('/users');
        }
      });
    }
  }
}
