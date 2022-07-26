import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AppService } from 'src/app/services/app.service';
import { UserStateService } from 'src/app/services/user-state.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  User?: User;
  title = 'Demo';
  greeting = {};

  constructor(private app: AppService, private userStateService: UserStateService, private http: HttpClient) {
    //can change this
    // http.get('resource').subscribe(data => this.greeting = data);
  }

  ngOnInit(): void {
    this.userStateService.currentUser.subscribe(user => this.User = user)
  }
}
