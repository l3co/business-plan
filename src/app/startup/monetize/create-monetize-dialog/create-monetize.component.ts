import {Component, Inject, OnInit} from '@angular/core';
import {Monetize} from '../../../models/monetize.models';
import {StartupService} from '../../../startup.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Startup} from '../../../models/startup.models';
import {CreateDialog} from '../../../create.dialog';

@Component({
  selector: 'l3co-create-monetize',
  templateUrl: './create-monetize.component.html'
})
export class CreateMonetizeComponent extends CreateDialog implements OnInit {

  monetize: Monetize = {description: '', note: ''};

  constructor(private service: StartupService,
              private dialogRef: MatDialogRef<CreateMonetizeComponent>,
              @Inject(MAT_DIALOG_DATA) private data: Startup) {
    super();
  }

  ngOnInit() {
  }

  save() {
    this.data.monetize.push(this.monetize);

    this.service.update(this.data)
      .then(() => this.dialogRef.close());
  }

  close() {
    this.dialogRef.close();
  }
}
