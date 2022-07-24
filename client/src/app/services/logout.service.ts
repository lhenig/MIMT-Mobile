import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  url: string = "http://localhost:8080/logout"; //dunno yet
  constructor(private http: HttpClient) { }
  logout() {
    
    return this.http.get(this.url, {observe: 'response'});
  }
}
