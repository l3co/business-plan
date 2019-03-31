import {Component, Input, OnInit} from '@angular/core';
import {Startup} from '../../../models/startup.models';
import {CreateInvestmentsDialogComponent} from '../../../startup/investments/create-investments-dialog/create-investments-dialog.component';
import {MatDialog} from '@angular/material';
import {ListInvestmentsDialogComponent} from '../../../startup/investments/list-investments-dialog/list-investments-dialog.component';

@Component({
  selector: 'l3co-menu-investment',
  templateUrl: './menu-investment.component.html'
})
export class MenuInvestmentComponent implements OnInit {

  @Input() startup: Startup;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  createInvestment(item: Startup) {
    this.dialog.open(CreateInvestmentsDialogComponent, {
      data: item
    });
  }

  listInvestment(startup: Startup) {
    this.dialog.open(ListInvestmentsDialogComponent, {
      data: startup
    });
  }
}
