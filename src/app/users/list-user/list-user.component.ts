import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/core/services/user-service.service';
import { User } from '../../core/model/user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  public usersList: User[] 
    
  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.usersList = this.userService.getUsers()
  }

  deleteUser(user: User):void {
    let i = this.usersList.indexOf(user)
    if(i!=-1) this.usersList.splice(i,1)
  }

}
