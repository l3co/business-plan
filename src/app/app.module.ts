import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';

import {MatChipsModule} from '@angular/material/chips';

import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatProgressBarModule,
  MatTooltipModule,
  MatTableModule
} from '@angular/material';


import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CardControlsComponent} from './dashboard/card-controls/card-controls.component';
import {FormsModule} from '@angular/forms';
import {ProvisionComponent} from './startup/provision/create-provision-dialog/provision.component';
import {ProductsComponent} from './startup/products/create-products-dialog/products.component';
import {ConcurrencesComponent} from './startup/concurrences/create-concurrences-dialog/concurrences.component';
import {MonetizeComponent} from './startup/monetize/create-monetize-dialog/monetize.component';
import {CreateInvestmentsDialogComponent} from './startup/investments/create-investments-dialog/create-investments-dialog.component';
import {HelpComponent} from './help/help.component';
import {UserComponent} from './user/user.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {MenuInvestmentComponent} from './dashboard/card-controls/menu-investment/menu-investment.component';
import {MenuProvisionComponent} from './dashboard/card-controls/menu-provision/menu-provision.component';
import {MenuConcurrencesComponent} from './dashboard/card-controls/menu-concurrences/menu-concurrences.component';
import {MenuMonetizeComponent} from './dashboard/card-controls/menu-monetize/menu-monetize.component';
import {MenuProductsComponent} from './dashboard/card-controls/menu-products/menu-products.component';
import {BusinessComponent} from './startup/business/business.component';
import {ListInvestmentsDialogComponent} from './startup/investments/list-investments-dialog/list-investments-dialog.component';

@NgModule({
  entryComponents: [
    CreateInvestmentsDialogComponent,
    ListInvestmentsDialogComponent,
    ConcurrencesComponent,
    ProvisionComponent,
    MonetizeComponent,
    ProductsComponent,
    BusinessComponent,
    HelpComponent
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    CreateInvestmentsDialogComponent,
    CardControlsComponent,
    ProvisionComponent,
    ProductsComponent,
    ConcurrencesComponent,
    MonetizeComponent,
    HelpComponent,
    BusinessComponent,
    UserComponent,
    MenuInvestmentComponent,
    MenuProvisionComponent,
    MenuConcurrencesComponent,
    MenuMonetizeComponent,
    MenuProductsComponent,
    ListInvestmentsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatButtonModule,
    MatGridListModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatDialogModule,
    MatTooltipModule,
    FormsModule,
    MatSnackBarModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
