import {Component, Input, OnInit} from '@angular/core';
import {Startup} from '../../models/startup.models';
import {DocsService} from '../../docs.service';
import {MatDialog} from '@angular/material';
import {CreateInvestmentsDialogComponent} from '../../startup/investments/create-investments-dialog/create-investments-dialog.component';
import {ConcurrencesComponent} from '../../startup/create-concurrences-dialog/create-concurrences-dialog/concurrences.component';
import {ProvisionComponent} from '../../startup/create-provision-dialog/create-provision-dialog/provision.component';
import {MonetizeComponent} from '../../startup/create-monetize-dialog/create-monetize-dialog/monetize.component';
import {ProductsComponent} from '../../startup/create-products-dialog/create-products-dialog/products.component';

@Component({
  selector: 'l3co-action',
  templateUrl: './card-controls.component.html',
  styleUrls: ['./card-controls.component.scss']
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

  callDialogProvision(startup: Startup) {
    this.dialog.open(ProvisionComponent, {
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
