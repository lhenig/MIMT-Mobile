import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AppService } from 'src/app/services/app.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  credentials = {name: '', password: ''};
  callback(): void {
    
  }
  constructor(private app: AppService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void{
    this.app.authenticate(this.credentials).subscribe((data) => {
      // this.app.authenticated = true;
      this.router.navigateByUrl('/user');
      return this.app;
      // console.log(this.app);
      
    });
    
  }
}
