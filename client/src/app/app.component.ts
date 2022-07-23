import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './services/app.service';
import { finalize } from 'rxjs/operators'; //'finally' is deprecated

//login boilerplate from spring.io
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  credentials = {name: '', password: ''}
  title = 'Skillstorm-P2';//has to match server
  constructor(private app: AppService, private http: HttpClient, private router: Router){
    
  }

  //might need to change this later
  logout() {
    this.http.post('logout', {}).pipe(finalize(() => {
        this.app.authenticated = false;
        this.router.navigateByUrl('/landing');
    })).subscribe();
  }
}
