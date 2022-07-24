import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { OutletContext, Router } from '@angular/router';
import { AppService } from './services/app.service';
import { finalize } from 'rxjs/operators'; //'finally' is deprecated
import { LogoutService } from './services/logout.service';
import { User } from './models/user.model';
import { UserService } from './services/user.service';
// import { CookieService } from 'ngx-cookie-service';

//login boilerplate from spring.io
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  credentials = {name: '', password: ''}
  title = 'Skillstorm-P2';//has to match server
  User?: User;
  
  constructor(private app: AppService, private userService: UserService, private logoutService: LogoutService, private http: HttpClient, private router: Router){
    
  }

  //might need to change this later
  logout() {
    this.logoutService.logout().subscribe((data)=>{});
    this.router.navigateByUrl('/landing');
  }
}
