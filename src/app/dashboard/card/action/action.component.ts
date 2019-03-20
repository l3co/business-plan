import {Component, Input, OnInit} from '@angular/core';
import {Startup} from '../../../models/startup.models';
import {DocsService} from '../../../docs.service';
import {MatDialog} from '@angular/material';
import {InvestmentsComponent} from '../../../investments/investments.component';
import {ConcurrencesComponent} from '../../../concurrences/concurrences.component';

@Component({
  selector: 'l3co-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  @Input() startup: Startup;

  constructor(private docs: DocsService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  exportFile(startup: Startup) {
    this.docs.generate(startup);
  }

  callDialogInvestment(item: Startup) {
    this.dialog.open(InvestmentsComponent, {
      width: '60%',
      data: item
    });
  }

  callDialogConcurrence(startup: Startup) {
    this.dialog.open(ConcurrencesComponent, {
      width: '60%',
      data: startup
    });
  }
}
