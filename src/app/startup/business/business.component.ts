import {Component, OnInit} from '@angular/core';
import {StartupService} from '../../startup.service';
import {Startup} from '../../models/startup.models';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'l3co-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  startup: Startup = {
    uid: '',
    idea: '',
    objective: '',
    market: '',
    monetize: [],
    provision: [],
    investments: [],
    products: [],
    concurrences: [],
    user_id: ''
  };

  constructor(private service: StartupService,
              private dialogRef: MatDialogRef<BusinessComponent>) {
  }

  ngOnInit() {
  }

  saveStartup() {
    this.service.create(this.startup)
      .then(() => this.dialogRef.close());
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
