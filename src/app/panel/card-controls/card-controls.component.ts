import {Component, Input, OnInit} from '@angular/core';
import {Startup} from '../../models/startup.models';

@Component({
  selector: 'l3co-action',
  templateUrl: './card-controls.component.html'
})
export class CardControlsComponent implements OnInit {

  @Input() startup: Startup;

  ngOnInit() {
  }
}
