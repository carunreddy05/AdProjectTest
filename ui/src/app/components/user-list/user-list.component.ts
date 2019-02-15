import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { IUsers } from '../../shared/models/interfaces.';
import { UsersService } from '../../shared/services/usersvc/users.service';

@Component({
  selector: 'pm-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnChanges {
  @Input() public userData: IUsers[];
  @Output() showUserDetails = new EventEmitter<boolean>();
  @Output() selectedUserData = new EventEmitter<IUsers>();

  public data: IUsers[];
  public pageTitle = 'Product Users';
  constructor() { }

  ngOnInit() {
  }

  public ngOnChanges(): void {
    this.data = this.userData;

  }

  viewUserDetails = (user) => {
    this.showUserDetails.emit(true);
    this.selectedUserData.emit(user);
  }

}
