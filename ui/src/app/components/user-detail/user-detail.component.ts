import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { IUsers } from '../../shared/models/interfaces.';

@Component({
  selector: 'pm-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnChanges {

  @Input() public userData: IUsers[];
  public userDetailData: any; // IUsers;

  constructor() { }

  ngOnInit() {

  }
  public ngOnChanges(): void {
    this.userDetailData = this.userData;

  }

}
