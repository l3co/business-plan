import {Component, Inject, OnInit} from '@angular/core';
import {StartupService} from '../../../startup.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Startup} from '../../../models/startup.models';
import {Monetize} from '../../../models/monetize.models';

@Component({
  selector: 'l3co-list-costs-dialog',
  templateUrl: './list-monetize-dialog.component.html'
})
export class ListMonetizeDialogComponent implements OnInit {

  constructor(private service: StartupService,
              private dialogRef: MatDialogRef<ListMonetizeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: Startup) {
  }

  ngOnInit() {
  }

  removeCosts(monetize: Monetize) {
    const index = this.data.monetize.map(value => value.description).indexOf(monetize.description);

    this.data.monetize.splice(index, 1);

    this.service.update(this.data).then(
      () => this.dialogRef.close());
  }

  monetizeIsEmpty(): boolean {
    return this.data.monetize === null
      || this.data.monetize === undefined
      || this.data.monetize.length === 0;
  }

  close() {
    this.dialogRef.close();
  }
}
