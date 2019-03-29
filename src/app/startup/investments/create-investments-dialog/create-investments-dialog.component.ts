import {Component, Inject, OnInit} from '@angular/core';
import {Startup} from '../../../models/startup.models';
import {StartupService} from '../../../startup.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Investments} from '../../../models/finances.models';
import {BaseDialog} from '../../../shared/base-dialog/base.dialog';

@Component({
  selector: 'l3co-investments',
  templateUrl: './create-investments-dialog.component.html'
})
export class CreateInvestmentsDialogComponent extends BaseDialog implements OnInit {

  investment: Investments = {name: '', value: 0.0};

  constructor(private service: StartupService,
              private dialogRef: MatDialogRef<CreateInvestmentsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: Startup) {
    super();
  }

  ngOnInit(): void {
  }


  save() {
    this.data.investments.push(this.investment);
    return this.service.update(this.data)
      .then(() => {
        this.dialogRef.close();
      });
  }

  close() {
    this.dialogRef.close();
  }
}
