import { Component, OnInit, OnChanges } from '@angular/core';
import { UsersService } from '../../shared/services/usersvc/users.service';
import { IUsers } from '../../shared/models/interfaces.';

@Component({
  selector: 'pm-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public userList: IUsers[];
  public showUserDetails: boolean = false;
  public selectedUserData: IUsers;

  constructor(private userService: UsersService) { }

  ngOnInit() {
      this.userService.getAllUsers().subscribe( (resp: any) => {
        this.userList = resp.results;

      });
  }



  showUserDetailsCheck = (val) => {
    this.showUserDetails = val;
  }

  getSelectedUserInfo = (user) => {
    this.selectedUserData = user;
  }
}
