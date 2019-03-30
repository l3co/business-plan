import {Component, Input, OnInit} from '@angular/core';
import {Startup} from '../../../models/startup.models';
import {MatDialog} from '@angular/material';
import {ListCostsDialogComponent} from '../../../startup/costs/list-costs-dialog/list-costs-dialog.component';
import {CreateCostsComponent} from '../../../startup/costs/create-costs-dialog/create-costs.component';

@Component({
  selector: 'l3co-menu-costs',
  templateUrl: './menu-costs.component.html'
})
export class MenuCostsComponent implements OnInit {

  @Input() startup: Startup;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  listCosts(item: Startup) {
    this.dialog.open(ListCostsDialogComponent, {
      data: item
    });
  }

  createCosts(item: Startup) {
    this.dialog.open(CreateCostsComponent, {
      data: item
    });
  }
}
