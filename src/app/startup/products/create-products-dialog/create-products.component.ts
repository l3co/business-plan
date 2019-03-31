import {Component, Inject, OnInit} from '@angular/core';
import {Products} from '../../../models/products.models';
import {StartupService} from '../../../startup.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Startup} from '../../../models/startup.models';
import {CreateDialog} from '../../../create.dialog';

@Component({
  selector: 'l3co-create-products',
  templateUrl: './create-products.component.html'
})
export class CreateProductsComponent extends CreateDialog implements OnInit {

  product: Products = {name: '', objective: ''};

  constructor(private service: StartupService,
              private dialogRef: MatDialogRef<CreateProductsComponent>,
              @Inject(MAT_DIALOG_DATA) private data: Startup) {
    super();
  }

  ngOnInit() {
  }

  save() {
    this.data.products.push(this.product);

    this.service.update(this.data)
      .then(() => this.dialogRef.close());
  }

  close() {
    this.dialogRef.close();
  }
}
