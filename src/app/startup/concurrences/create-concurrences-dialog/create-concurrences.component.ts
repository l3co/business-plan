import {Component, Inject, OnInit} from '@angular/core';
import {Concurrences} from '../../../models/concurrences.models';
import {StartupService} from '../../../startup.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Startup} from '../../../models/startup.models';
import {CreateDialog} from '../../../create.dialog';

@Component({
  selector: 'l3co-create-concurrences',
  templateUrl: './create-concurrences.component.html'
})
export class CreateConcurrencesComponent extends CreateDialog implements OnInit {

  concurrences: Concurrences = {name: '', site: ''};

  constructor(private service: StartupService,
              private dialogRef: MatDialogRef<CreateConcurrencesComponent>,
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
