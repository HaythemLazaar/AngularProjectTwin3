import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/model/user';
import { UserService } from 'src/app/core/services/userService';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public usersList: User[]

  constructor(private route: ActivatedRoute, private userService: UserService) { 
  }

  ngOnInit(): void {
    console.log(this.route)
  }

}
