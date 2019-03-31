import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Startup} from '../../../models/startup.models';
import {CreateMonetizeComponent} from '../../../startup/monetize/create-monetize-dialog/create-monetize.component';
import {ListMonetizeDialogComponent} from '../../../startup/monetize/list-monetize-dialog/list-monetize-dialog.component';

@Component({
  selector: 'l3co-menu-monetize',
  templateUrl: './menu-monetize.component.html'
})
export class MenuMonetizeComponent implements OnInit {
  @Input() startup: Startup;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  createMonetize(item: Startup) {
    this.dialog.open(CreateMonetizeComponent, {
      data: item
    });
  }

  listMonetize(startup: Startup) {
    this.dialog.open(ListMonetizeDialogComponent, {
      data: startup
    });
  }

}
