import {Component, Input, OnInit} from '@angular/core';
import {Startup} from '../../../models/startup.models';
import {StartupService} from '../../../startup.service';
import {MatDialog} from '@angular/material';
import {BusinessComponent} from '../../../startup/business/business.component';
import {DocsService} from '../../../docs.service';

@Component({
  selector: 'l3co-menu-settings',
  templateUrl: './menu-settings.component.html'
})
export class MenuSettingsComponent implements OnInit {

  @Input() startup: Startup;

  constructor(private dialog: MatDialog, private service: StartupService, private docs: DocsService) {
  }

  ngOnInit() {
  }

  remove(uid: string) {
    return this.service.removeStartup(uid);
  }

  edit(startup: Startup) {
    this.dialog.open(BusinessComponent, {
      data: startup
    });
  }

  exportDoc(startup: Startup) {
    this.docs.generate(startup);
  }
}
