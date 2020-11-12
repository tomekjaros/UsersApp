import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  public users: User [] = [];


  constructor() { }

  ngOnInit(): void {
    const user1: User = {
      firstName : 'Jan',
      lastName : 'Nowak'
    };
    const user2: User = {
      firstName : 'Marian',
      lastName : 'Kowalski'
    };

    const user3: User = {
      firstName : 'Anna',
      lastName : 'Barańska'
    };
    this.users.push(user1, user2, user3);
  }
  ngOnDestroy(): void {


  }

}
