import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserStateService } from './user-state.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  url: string = "http://localhost:8080/logout"; //dunno yet
  constructor(private http: HttpClient, private userStateService: UserStateService, private router: Router) { }
  logout(): Observable<HttpResponse<any>> {
    this.userStateService.resetUser();
    // this.router.navigateByUrl('/landing');
    return this.http.get(this.url, {observe: 'response', withCredentials: true});
  }
}
