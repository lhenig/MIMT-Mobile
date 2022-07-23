import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../models/user.model";


@Injectable({
    providedIn: 'root'
  })
export class AppService {
    
  authenticated = false;
  url: string = "http://localhost:8080/login";

  
  private loggedInUserSubject:BehaviorSubject<User | null>;
  public loggedInUser:Observable<User | null>;

  constructor(private http:HttpClient) {
    
      this.loggedInUserSubject = new BehaviorSubject<User | null>(null);
      this.loggedInUser = this.loggedInUserSubject.asObservable();
      
  }

  public setLoggedUser(loggedUser:User|null):void {
      this.loggedInUserSubject.next(loggedUser);
  }

  public getLoggedUser():User | null {
      return this.loggedInUserSubject.value;
  }
   

  authenticate(credentials: { name: any; password: any; }): Observable<HttpResponse<FormData>>{
    
        // const headers = new HttpHeaders(credentials ? {
        //   //might need to rename properties
        //     authorization : 'Basic ' + btoa(credentials.name + ':' + credentials.password)
        // } : {});
        
        console.log(credentials)
        
        const formData = new FormData();
        formData.append('username', credentials.name);
        formData.append('password', credentials.password);
        
        return this.http.post<FormData>(this.url, formData, {observe: 'response', withCredentials: true});
    }

}