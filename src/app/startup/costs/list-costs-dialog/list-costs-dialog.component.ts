import {Component, Inject, OnInit} from '@angular/core';
import {StartupService} from '../../../startup.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Startup} from '../../../models/startup.models';
import {Costs} from '../../../models/finances.models';

@Component({
  selector: 'l3co-list-costs-dialog',
  templateUrl: './list-costs-dialog.component.html'
})
export class ListCostsDialogComponent implements OnInit {

  constructor(private service: StartupService,
              private dialogRef: MatDialogRef<ListCostsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: Startup) {
  }

  ngOnInit() {
  }

  removeCosts(cost: Costs) {
    const index = this.data.costs.map(value => value.name).indexOf(cost.name);

    this.data.costs.splice(index, 1);

    this.service.update(this.data).then(
      () => this.dialogRef.close());
  }

  costsIsEmpty(): boolean {
    return this.data.costs === null
      || this.data.costs === undefined
      || this.data.costs.length === 0;
  }

  close() {
    this.dialogRef.close();
  }
}
