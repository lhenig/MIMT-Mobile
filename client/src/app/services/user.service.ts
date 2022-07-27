import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = environment.apiUrl+"/user";
  constructor(private http: HttpClient) { }

  //need to worry about user id being leaked
  findUser(): Observable<HttpResponse<User>> {
    return this.http.get<User>(this.url + "/" + sessionStorage.getItem("email"), {observe: 'response',withCredentials: true});
  }

  
  //might have to tweak the arguments for these
  saveUser(user: User): Observable<HttpResponse<User>> {
    return this.http.post<User>(this.url + "/signup", user, {observe: 'response'});
  }

  updateUser(user: User): Observable<HttpResponse<User>> {
    return this.http.put<User>(this.url, user, {observe: 'response',withCredentials: true});
  }

  deleteUser(id: number): Observable<HttpResponse<User>> {
    return this.http.delete<User>(this.url, {observe: 'response',withCredentials: true});
  }

}
