import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  //originally wanted this to keep track of current User info
  //now used to conditionally render

  thisUser?: User;
  private UserSource = new BehaviorSubject<User>(this.thisUser!)
  currentUser = this.UserSource.asObservable();
  
  constructor() { }

  getUser() {
    return this.currentUser;
  }

  resetUser() {
    this.UserSource.next({id:0,userName:"",email:"",password:""})
  }

  //having trouble persisting userState through pages.
  //apparently it only shares data on the page with the api call
  changeUser(user: User) {
    this.UserSource.next(user);
  }
}
