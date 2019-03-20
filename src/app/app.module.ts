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
  MatDialogModule
} from '@angular/material';


import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BusinessComponent} from './business/business.component';
import {CardComponent} from './dashboard/card/card.component';
import {ActionComponent} from './dashboard/card/action/action.component';
import {FormsModule} from '@angular/forms';
import {ProvisionComponent} from './provision/provision.component';
import {ProductsComponent} from './products/products.component';
import {ConcurrencesComponent} from './concurrences/concurrences.component';
import {MonetizeComponent} from './monetize/monetize.component';
import {InvestmentsComponent} from './investments/investments.component';

@NgModule({
  entryComponents: [
    InvestmentsComponent,
    ConcurrencesComponent,
    ProvisionComponent,
    MonetizeComponent
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
    MonetizeComponent
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
