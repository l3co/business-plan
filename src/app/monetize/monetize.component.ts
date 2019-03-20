import {Component, Inject, OnInit} from '@angular/core';
import {Monetize} from '../models/monetize.models';
import {StartupService} from '../startup.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Startup} from '../models/startup.models';

@Component({
  selector: 'l3co-monetize',
  templateUrl: './monetize.component.html',
  styleUrls: ['./monetize.component.scss']
})
export class MonetizeComponent implements OnInit {

  monetize: Monetize = {description: '', note: ''};

  constructor(private service: StartupService,
              private dialogRef: MatDialogRef<MonetizeComponent>,
              @Inject(MAT_DIALOG_DATA) private data: Startup) {
  }

  ngOnInit() {
  }

  createMonetize() {
    this.data
      .monetize.push(this.monetize);

    this.service
      .update(this.data)
      .then(() => this.dialogRef.close());
  }

}
