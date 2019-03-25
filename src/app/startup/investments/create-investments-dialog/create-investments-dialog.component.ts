import {Component, Inject, OnInit} from '@angular/core';
import {Startup} from '../../../models/startup.models';
import {StartupService} from '../../../startup.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Investments} from '../../../models/finances.models';

@Component({
  selector: 'l3co-investments',
  templateUrl: './create-investments-dialog.component.html',
  styleUrls: ['./create-investments-dialog.component.scss']
})
export class CreateInvestmentsDialogComponent implements OnInit {

  investment: Investments = {name: '', value: 0.0};

  constructor(private service: StartupService,
              private dialogRef: MatDialogRef<CreateInvestmentsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: Startup) {
  }

  ngOnInit(): void {
  }


  saveInvestment() {
    this.data.investments.push(this.investment);
    return this.service.update(this.data)
      .then(() => {
        this.dialogRef.close();
      });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
