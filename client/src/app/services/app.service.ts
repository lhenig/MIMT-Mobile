import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user.model";


@Injectable({
    providedIn: 'root'
  })
export class AppService {
    
  authenticated = false;
  url: string = "http://localhost:8080/login";

  constructor(private http: HttpClient) {
  }

   

  authenticate(credentials: { name: any; password: any; }): Observable<HttpResponse<FormData>>{
    
        const headers = new HttpHeaders(credentials ? {
          //might need to rename properties
            authorization : 'Basic ' + btoa(credentials.name + ':' + credentials.password)
        } : {});

        console.log(credentials)
        
        const formData = new FormData();
        formData.append('username', credentials.name);
        formData.append('password', credentials.password);
        
        return this.http.post<FormData>(this.url, formData, {observe: 'response'});
    }

}