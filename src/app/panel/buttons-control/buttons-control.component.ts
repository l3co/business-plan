import {Component, Input, OnInit} from '@angular/core';
import {Startup} from '../../models/startup.models';

@Component({
  selector: 'l3co-action',
  templateUrl: './buttons-control.component.html'
})
export class ButtonsControlComponent implements OnInit {

  @Input() startup: Startup;

  ngOnInit() {
  }
}
