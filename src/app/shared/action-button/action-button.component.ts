import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Startup} from '../../models/startup.models';

@Component({
  selector: 'l3co-action-button',
  templateUrl: './action-button.component.html'
})
export class ActionButtonComponent implements OnInit {

  @Input() toolTip: string;
  @Input() createButton: string;
  @Input() listButton: string;
  @Input() startup: Startup;
  @Input() icon: string;
  @Input() quantity: number;

  @Output() list: EventEmitter<Startup> = new EventEmitter();
  @Output() create: EventEmitter<Startup> = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }

  createEvent() {
    this.create.emit(this.startup);
  }

  listEvent() {
    this.list.emit(this.startup);
  }
}
