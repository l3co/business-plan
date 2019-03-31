import {Component, OnInit} from '@angular/core';
import {StartupService} from '../../startup.service';
import {builderStartup, Startup} from '../../models/startup.models';
import {MatDialogRef} from '@angular/material';
import {Category} from '../../models/market.models';
import {CreateDialog} from '../../create.dialog';

@Component({
  selector: 'l3co-business',
  templateUrl: './business.component.html'
})
export class BusinessComponent extends CreateDialog implements OnInit {

  startup: Startup = builderStartup();

  categories: Category[];

  constructor(private service: StartupService,
              private dialogRef: MatDialogRef<BusinessComponent>) {
    super();
  }

  ngOnInit() {
    this.service.listAllCategory().subscribe(value => this.categories = value);
  }

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.service.create(this.startup)
      .then(() => this.dialogRef.close());
  }
}
