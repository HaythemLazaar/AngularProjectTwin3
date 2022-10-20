import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/model/user';
import { UserServiceService } from 'src/app/core/services/user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public usersList: User[]
  public userId: number
  public user: User

  constructor(
    private route: ActivatedRoute,
    private userService: UserServiceService
    ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id']
    this.user = this.userService.getUserByID(this.userId)
    console.log(this.user)
  }

}
