import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = "http://localhost:8080/api/users"; //local spring app
  constructor(private http: HttpClient) { }

  //need to worry about user id being leaked
  findUser(id: number): Observable<HttpResponse<User>> {
    return this.http.get<User>(this.url, {observe: 'response'});
  }
  // Added to test connection to spring app
  findUsers(): Observable<HttpResponse<User>> {
    return this.http.get<User>(this.url, {observe: 'response'});
  }

  //might have to tweak the arguments for these
  saveUser(user: User): Observable<HttpResponse<User>> {
    return this.http.post<User>(this.url, user, {observe: 'response'});
  }

  updateUser(user: User): Observable<HttpResponse<User>> {
    return this.http.put<User>(this.url, user, {observe: 'response'});
  }

  deleteUser(id: number): Observable<HttpResponse<User>> {
    return this.http.delete<User>(this.url, {observe: 'response'});
  }

}
