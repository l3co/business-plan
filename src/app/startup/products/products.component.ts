import {Component, Inject, OnInit} from '@angular/core';
import {Products} from '../../models/products.models';
import {StartupService} from '../../startup.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Startup} from '../../models/startup.models';

@Component({
  selector: 'l3co-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  product: Products = {name: '', objective: ''};

  constructor(private service: StartupService,
              private dialogRef: MatDialogRef<ProductsComponent>,
              @Inject(MAT_DIALOG_DATA) private data: Startup) {
  }

  ngOnInit() {
  }

  saveProduct() {
    this.data
      .products.push(this.product);

    this.service
      .update(this.data)
      .then(() => this.dialogRef.close());
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
