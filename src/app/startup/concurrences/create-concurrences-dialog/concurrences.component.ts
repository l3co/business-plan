import {Component, Inject, OnInit} from '@angular/core';
import {Concurrences} from '../../../models/concurrences.models';
import {StartupService} from '../../../startup.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Startup} from '../../../models/startup.models';
import {BaseDialog} from '../../../shared/base-dialog/base.dialog';

@Component({
  selector: 'l3co-concurrences',
  templateUrl: './concurrences.component.html'
})
export class ConcurrencesComponent extends BaseDialog implements OnInit {

  concurrences: Concurrences = {name: '', site: ''};

  constructor(private service: StartupService,
              private dialogRef: MatDialogRef<ConcurrencesComponent>,
              @Inject(MAT_DIALOG_DATA) private data: Startup) {
    super();
  }

  ngOnInit() {
  }

  save() {
    this.data
      .concurrences.push(this.concurrences);

    this.service
      .update(this.data)
      .then(() => this.dialogRef.close());
  }

  close() {
    this.dialogRef.close();
  }
}
