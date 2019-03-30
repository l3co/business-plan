import {Component, Input, OnInit} from '@angular/core';
import {Startup} from '../../models/startup.models';
import {DocsService} from '../../docs.service';
import {MatDialog} from '@angular/material';
import {CreateCostsComponent} from '../../startup/costs/create-costs-dialog/create-costs.component';
import {CreateMonetizeComponent} from '../../startup/monetize/create-monetize-dialog/create-monetize.component';
import {CreateProductsComponent} from '../../startup/products/create-products-dialog/create-products.component';

@Component({
  selector: 'l3co-action',
  templateUrl: './card-controls.component.html'
})
export class CardControlsComponent implements OnInit {

  @Input() startup: Startup;

  constructor(private docs: DocsService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  exportFile(startup: Startup) {
    this.docs.generate(startup);
  }

  callDialogCosts(startup: Startup) {
    this.dialog.open(CreateCostsComponent, {
      data: startup
    });
  }

  callDialogMonetize(startup: Startup) {
    this.dialog.open(CreateMonetizeComponent, {
      data: startup
    });
  }

  callDialogProduct(startup: Startup) {
    this.dialog.open(CreateProductsComponent, {
      data: startup
    });
  }
}
