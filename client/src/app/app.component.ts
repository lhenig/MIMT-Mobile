import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { OutletContext, Router } from '@angular/router';
import { AppService } from './services/app.service';
import { finalize } from 'rxjs/operators'; //'finally' is deprecated
import { LogoutService } from './services/logout.service';
import { User } from './models/user.model';
import { UserService } from './services/user.service';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UserStateService } from './services/user-state.service';
// import { CookieService } from 'ngx-cookie-service';

//login boilerplate from spring.io
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  credentials = {name: '', password: ''}
  title = 'Skillstorm-P2';//has to match server
  User?: User;
  userId = JSON.parse(sessionStorage.getItem('userId') || '{}');
  

  constructor(private app: AppService, private userStateService: UserStateService, private logoutService: LogoutService, private http: HttpClient, private router: Router){
    
  }

  ngOnInit(): void {
    this.userStateService.currentUser.subscribe(user => this.User = user)
  }

  typeOf(any: any){
    return typeof(any);
  }

  //might need to change this later
  logout() {
    this.logoutService.logout(
        // this.app.authenticated = false;
    ).subscribe((data)=>{
      // return this.app;
      
      
    });
    sessionStorage.clear();
  }
}
