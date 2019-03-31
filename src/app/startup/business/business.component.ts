import {Component, Inject, OnInit} from '@angular/core';
import {StartupService} from '../../startup.service';
import {builderStartup, Startup} from '../../models/startup.models';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
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
              private dialogRef: MatDialogRef<BusinessComponent>,
              @Inject(MAT_DIALOG_DATA) private data: Startup) {
    super();
  }

  ngOnInit() {
    if (this.data !== null && this.data !== undefined) {
      this.startup = this.data;
    }
    this.service.listAllCategory().subscribe(value => this.categories = value);
  }

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    (this.startup.uid ?
      this.service.update(this.startup)
      : this.service.create(this.startup)).then(() => this.dialogRef.close());
  }
}
