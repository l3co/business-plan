import {Component, Inject, OnInit} from '@angular/core';
import {Provision} from '../../models/finances.models';
import {StartupService} from '../../startup.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Startup} from '../../models/startup.models';

@Component({
  selector: 'l3co-provision',
  templateUrl: './provision.component.html',
  styleUrls: ['./provision.component.scss']
})
export class ProvisionComponent implements OnInit {

  provision: Provision = {name: '', value: 0.0};

  constructor(private service: StartupService,
              private dialogRef: MatDialogRef<ProvisionComponent>,
              @Inject(MAT_DIALOG_DATA) private data: Startup) {
  }

  ngOnInit() {
  }

  saveProvision() {
    this.data
      .provision.push(this.provision);

    this.service
      .update(this.data)
      .then(() => this.dialogRef.close());
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
