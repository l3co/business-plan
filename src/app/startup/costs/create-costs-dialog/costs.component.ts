import {Component, Inject, OnInit} from '@angular/core';
import {Costs} from '../../../models/finances.models';
import {StartupService} from '../../../startup.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Startup} from '../../../models/startup.models';
import {BaseDialog} from '../../../shared/base-dialog/base.dialog';

@Component({
  selector: 'l3co-costs',
  templateUrl: './costs.component.html'
})
export class CostsComponent extends BaseDialog implements OnInit {

  costs: Costs = {name: '', value: 0.0};

  constructor(private service: StartupService,
              private dialogRef: MatDialogRef<CostsComponent>,
              @Inject(MAT_DIALOG_DATA) private data: Startup) {
    super();
  }

  ngOnInit() {
  }

  save() {
    this.data
      .costs.push(this.costs);

    this.service
      .update(this.data)
      .then(() => this.dialogRef.close());
  }

  close() {
    this.dialogRef.close();
  }
}
