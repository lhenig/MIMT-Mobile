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
  credentials = {name: '', email: '', password: ''};
  newUser: User = new User (this.credentials.name, this.credentials.email, this.credentials.password); 
  errorMsg: string = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    
    this.newUser.userName = this.credentials.name;
    this.newUser.email = this.credentials.email;
    this.newUser.password = this.credentials.password;
    if (this.newUser.userName.trim() != "" && this.newUser.email != "") {
      // console.log(this.newUser)
      //send the forms values
      this.userService.saveUser(this.newUser).subscribe(data => {
        
        let route = this.router.config.find(r => r.path === 'login');
        if (route) {
          this.router.navigateByUrl('/login');
        }
      }, (error:Error)=>{
        this.errorMsg = this.handleError(error);
      });
    }
  }

  handleError(error:any) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = 'Unexpected Error';
    } else {
      msg = 'Email already tied to an account.'
    }
    console.log(msg);
    this.errorMsg! = msg;
    return msg;
  }
}
