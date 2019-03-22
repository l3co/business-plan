import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';

import {MatChipsModule} from '@angular/material/chips';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatToolbarModule,
  MatGridListModule,
  MatListModule,
  MatSelectModule,
  MatCardModule,
  MatIconModule,
  MatDialogModule, MatBadgeModule
} from '@angular/material';


import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BusinessComponent} from './startup/business/business.component';
import {CardComponent} from './dashboard/card/card.component';
import {ActionComponent} from './dashboard/card/action/action.component';
import {FormsModule} from '@angular/forms';
import {ProvisionComponent} from './startup/provision/provision.component';
import {ProductsComponent} from './startup/products/products.component';
import {ConcurrencesComponent} from './startup/concurrences/concurrences.component';
import {MonetizeComponent} from './startup/monetize/monetize.component';
import {InvestmentsComponent} from './startup/investments/investments.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  entryComponents: [
    InvestmentsComponent,
    ConcurrencesComponent,
    ProvisionComponent,
    MonetizeComponent,
    ProductsComponent,
    HelpComponent
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    BusinessComponent,
    CardComponent,
    InvestmentsComponent,
    ActionComponent,
    ProvisionComponent,
    ProductsComponent,
    ConcurrencesComponent,
    MonetizeComponent,
    HelpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatButtonModule,
    MatBadgeModule,
    MatGridListModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
