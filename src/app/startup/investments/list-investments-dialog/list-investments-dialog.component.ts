import {Component, Inject, OnInit} from '@angular/core';
import {StartupService} from '../../../startup.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Startup} from '../../../models/startup.models';
import {Investments} from '../../../models/finances.models';

@Component({
  selector: 'l3co-list-investments-dialog',
  templateUrl: './list-investments-dialog.component.html'
})
export class ListInvestmentsDialogComponent implements OnInit {

  displayedColumns: string[] = ['action', 'name', 'value'];

  constructor(private service: StartupService,
              private dialogRef: MatDialogRef<ListInvestmentsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: Startup) {
  }

  ngOnInit() {
  }

  removeInvestment(investment: Investments) {
    const index = this.data.investments.map(value => value.name).indexOf(investment.name);
    this.data.investments.splice(index, 1);
    this.service.update(this.data).then(
      () => this.dialogRef.close());
  }

  investmentIsEmpty(): boolean {
    return this.data.investments === null
      || this.data.investments.length === undefined
      || this.data.investments.length === 0;
  }

  close() {
    this.dialogRef.close();
  }
}
