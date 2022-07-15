import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user: User = new User ("", "", "", [], []); 

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  get(): void {
    if (this.user.name.trim() != "" && this.user.email != "") {
      //send the forms values
      this.userService.findUser(this.user).subscribe(data => {
        let route = this.router.config.find(r => r.path === 'users');
        if (route) {
          this.router.navigateByUrl('/users');
        }
      });
    }
  }
}
