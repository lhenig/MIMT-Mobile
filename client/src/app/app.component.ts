import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './services/app.service';
import { finalize } from 'rxjs/operators'; //'finally' is deprecated
import { LogoutService } from './services/logout.service';

//login boilerplate from spring.io
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  credentials = {name: '', password: ''}
  title = 'Skillstorm-P2';//has to match server
  constructor(private app: AppService, private logoutService: LogoutService, private http: HttpClient, private router: Router){
    
  }

  authenticated() { 
    // console.log(this.app.authenticated)
    // return this.app.authenticated; 
  }

  //might need to change this later
  logout() {
    this.logoutService.logout(
        // this.app.authenticated = false;
    ).subscribe((data)=>{
      console.log(data);
      // return this.app;
      this.router.navigateByUrl('/landing');
    });
  }
}
