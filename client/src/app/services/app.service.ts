import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "../models/user.model";
import { UserService } from "./user.service";

@Injectable({
    providedIn: 'root'
  })
export class AppService {
    
  // authenticated = false;
  url: string = environment.apiUrl + "/login";

  constructor(private http:HttpClient) {}
  User?: User;
  authenticate(credentials: { email: any; password: any; }): Observable<HttpResponse<FormData>>{

        // Stores name for other components to use. Functions on other components only work if authenticated
        sessionStorage.setItem('email', credentials.email);
        // Format that backend receives login credentials
        const formData = new FormData();
        formData.append('username', credentials.email);
        formData.append('password', credentials.password);
        
        return this.http.post<FormData>(this.url, formData, {observe: 'response', withCredentials: true});
  }
}