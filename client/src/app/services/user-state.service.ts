import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  private UserSource = new BehaviorSubject<User>({id:0,userName:"",email:"",password:""})
  currentUser = this.UserSource.asObservable();
  
  constructor() { }

  resetUser() {
    this.UserSource.next({id:0,userName:"",email:"",password:""})
  }

  changeUser(user: User) {
    this.UserSource.next(user);
  }
}