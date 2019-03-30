import {Component, Inject, OnInit} from '@angular/core';
import {StartupService} from '../../../startup.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Startup} from '../../../models/startup.models';
import {Products} from '../../../models/products.models';

@Component({
  selector: 'l3co-list-products-dialog',
  templateUrl: './list-products-dialog.component.html'
})
export class ListProductsDialogComponent implements OnInit {

  constructor(private service: StartupService,
              private dialogRef: MatDialogRef<ListProductsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: Startup) {
  }

  ngOnInit() {
  }

  removeProducts(product: Products) {
    const index = this.data.products.map(value => value.name).indexOf(product.name);

    this.data.products.splice(index, 1);

    this.service.update(this.data).then(
      () => this.dialogRef.close());
  }

  productsIsEmpty(): boolean {
    return this.data.products === null
      || this.data.products === undefined
      || this.data.products.length === 0;
  }

  close() {
    this.dialogRef.close();
  }
}
