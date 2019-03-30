import {Component, Input, OnInit} from '@angular/core';
import {Startup} from '../../../models/startup.models';
import {MatDialog} from '@angular/material';
import {CreateProductsComponent} from '../../../startup/products/create-products-dialog/create-products.component';
import {ListProductsDialogComponent} from '../../../startup/products/list-products-dialog/list-products-dialog.component';

@Component({
  selector: 'l3co-menu-products',
  templateUrl: './menu-products.component.html'
})
export class MenuProductsComponent implements OnInit {

  @Input() startup: Startup;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  createProduct(item: Startup) {
    this.dialog.open(CreateProductsComponent, {
      data: item
    });
  }

  listProduct(startup: Startup) {
    this.dialog.open(ListProductsDialogComponent, {
      data: startup
    });
  }

}
