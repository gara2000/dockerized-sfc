import { Component } from '@angular/core';
import { User } from '../../../shared/models/User';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  users: User[] = [];

  constructor(private userService: UserService){
    userService.getAllUsers().subscribe((users_data)=>{
      this.users = users_data;
    });
  }
}
