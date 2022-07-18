import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  title = 'Demo';
  greeting = {};

  constructor(private app: AppService, private http: HttpClient) {
    //can change this
    http.get('resource').subscribe(data => this.greeting = data);
  }

  ngOnInit(): void {
  }

  authenticated() { return this.app.authenticated; }
}
