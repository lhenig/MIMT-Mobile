import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users-plans',
  templateUrl: './users-plans.component.html',
  styleUrls: ['./users-plans.component.css']
})
export class UsersPlansComponent implements OnInit {

  @Input() User?: User;

  constructor() { }

  ngOnInit(): void {
  }

}
