import {Component, Input, OnInit} from '@angular/core';
import {Startup} from '../../../models/startup.models';
import {DocsService} from '../../../docs.service';

@Component({
  selector: 'l3co-menu-share',
  templateUrl: './menu-share.component.html'
})
export class MenuShareComponent implements OnInit {

  @Input() startup: Startup;

  constructor(private docs: DocsService) {
  }

  ngOnInit() {
  }

  exportDoc(startup: Startup) {
    this.docs.generate(startup);
  }

  // exportMail(startup: Startup) {
  //   return this.mail.share(startup);
  // }
}
