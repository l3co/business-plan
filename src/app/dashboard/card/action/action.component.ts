import {Component, Input, OnInit} from '@angular/core';
import {Startup} from '../../../models/startup.models';
import {DocsService} from '../../../docs.service';

@Component({
  selector: 'l3co-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  @Input() startup: Startup;

  constructor(private docs: DocsService) {
  }

  ngOnInit() {
  }

  exportFile(startup: Startup) {
    this.docs.generate(startup);
  }
}
