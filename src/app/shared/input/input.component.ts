import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'l3co-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() btnDescription: string;
  @Input() functionReference: any;
  @Input() title: string;


  constructor() {
  }

  ngOnInit() {
  }

}
