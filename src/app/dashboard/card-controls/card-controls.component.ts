import {Component, Input, OnInit} from '@angular/core';
import {Startup} from '../../models/startup.models';
import {DocsService} from '../../docs.service';
import {MatDialog} from '@angular/material';
import {ConcurrencesComponent} from '../../startup/concurrences/create-concurrences-dialog/concurrences.component';
import {CostsComponent} from '../../startup/costs/create-costs-dialog/costs.component';
import {MonetizeComponent} from '../../startup/monetize/create-monetize-dialog/monetize.component';
import {ProductsComponent} from '../../startup/products/create-products-dialog/products.component';

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

  callDialogConcurrence(startup: Startup) {
    this.dialog.open(ConcurrencesComponent, {
      data: startup
    });
  }

  callDialogCosts(startup: Startup) {
    this.dialog.open(CostsComponent, {
      data: startup
    });
  }

  callDialogMonetize(startup: Startup) {
    this.dialog.open(MonetizeComponent, {
      data: startup
    });
  }

  callDialogProduct(startup: Startup) {
    this.dialog.open(ProductsComponent, {
      data: startup
    });
  }
}
