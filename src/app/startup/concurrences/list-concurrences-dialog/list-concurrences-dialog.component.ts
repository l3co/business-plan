import {Component, Inject, OnInit} from '@angular/core';
import {StartupService} from '../../../startup.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Startup} from '../../../models/startup.models';
import {Concurrences} from '../../../models/concurrences.models';

@Component({
  selector: 'l3co-list-concurrences-dialog',
  templateUrl: './list-concurrences-dialog.component.html'
})
export class ListConcurrencesDialogComponent implements OnInit {

  displayedColumns: string[] = ['action', 'name', 'site'];

  constructor(private service: StartupService,
              private dialogRef: MatDialogRef<ListConcurrencesDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: Startup) {
  }

  ngOnInit() {
  }

  removeConcurrences(concurrence: Concurrences) {
    const index = this.data.concurrences.map(value => value.name).indexOf(concurrence.name);

    this.data.concurrences.splice(index, 1);

    this.service.update(this.data).then(
      () => this.dialogRef.close());
  }

  concurrencesIsEmpty(): boolean {
    return this.data.concurrences === null
      || this.data.concurrences === undefined
      || this.data.concurrences.length === 0;
  }

  close() {
    this.dialogRef.close();
  }
}
