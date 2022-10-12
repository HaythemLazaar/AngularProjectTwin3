import { Component, OnInit } from '@angular/core';
import { User } from '../../core/model/user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  public usersList: User[] = [
    {
      id: 1,
      name: 'James Nix',
      job: 'Full Stack Developer',
      phone: '046 5685 6969',
      email:'JamesNix@spy.com',
      address:'5 Boar Lane SELLING 2LG',
      picture:'https://bootdey.com/img/Content/avatar/avatar2.png'
    },
    {
      id: 2,
      name: 'Darlene Smith',
      job: 'UI/UX Designer',
      phone: '012 6587 1236',
      email:'DarleneSmith@spy.com',
      address:'57 Guildry Street GAMRIE',
      picture:'https://bootdey.com/img/Content/avatar/avatar3.png'
    },
    {
      id: 2,
      name: 'William Swift',
      job: 'Backend Developer',
      phone: '012 6587 1236',
      email:' WilliamSwift@spy.co',
      address:'80 South Street MONKW 7BR',
      picture:'https://bootdey.com/img/Content/avatar/avatar4.png'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  deleteUser(user: User):void {
    let i = this.usersList.indexOf(user)
    if(i!=-1) this.usersList.splice(i,1)
  }

}
