import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pm-form-error-display',
  templateUrl: './form-error-display.component.html',
  styleUrls: ['./form-error-display.component.scss']
})
export class FormErrorDisplayComponent implements OnInit {

  @Input() errorMsg: string;
  @Input() displayError: boolean;

  constructor() { }

  ngOnInit() {
  }

}


