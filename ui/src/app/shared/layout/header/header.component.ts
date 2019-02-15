import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public pageTitle = 'welcome';
  constructor() { }

  ngOnInit() {
  }

}
