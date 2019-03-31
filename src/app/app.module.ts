import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';

import {MatChipsModule} from '@angular/material/chips';

import {
  MatBadgeModule,
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
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';


import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {PanelComponent} from './panel/panel.component';
import {CardControlsComponent} from './panel/card-controls/card-controls.component';
import {FormsModule} from '@angular/forms';
import {CreateCostsComponent} from './startup/costs/create-costs-dialog/create-costs.component';
import {CreateProductsComponent} from './startup/products/create-products-dialog/create-products.component';
import {CreateConcurrencesComponent} from './startup/concurrences/create-concurrences-dialog/create-concurrences.component';
import {CreateMonetizeComponent} from './startup/monetize/create-monetize-dialog/create-monetize.component';
import {CreateInvestmentsDialogComponent} from './startup/investments/create-investments-dialog/create-investments-dialog.component';
import {HelpComponent} from './help/help.component';
import {UserComponent} from './user/user.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {MenuInvestmentComponent} from './panel/card-controls/menu-investment/menu-investment.component';
import {MenuCostsComponent} from './panel/card-controls/menu-costs/menu-costs.component';
import {MenuConcurrencesComponent} from './panel/card-controls/menu-concurrences/menu-concurrences.component';
import {MenuMonetizeComponent} from './panel/card-controls/menu-monetize/menu-monetize.component';
import {MenuProductsComponent} from './panel/card-controls/menu-products/menu-products.component';
import {BusinessComponent} from './startup/business/business.component';
import {ListInvestmentsDialogComponent} from './startup/investments/list-investments-dialog/list-investments-dialog.component';
import {ActionButtonComponent} from './shared/action-button/action-button.component';
import {ListConcurrencesDialogComponent} from './startup/concurrences/list-concurrences-dialog/list-concurrences-dialog.component';
import {ListCostsDialogComponent} from './startup/costs/list-costs-dialog/list-costs-dialog.component';
import {ListMonetizeDialogComponent} from './startup/monetize/list-monetize-dialog/list-monetize-dialog.component';
import {ListProductsDialogComponent} from './startup/products/list-products-dialog/list-products-dialog.component';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {MenuShareComponent} from './panel/card-controls/menu-share/menu-share.component';
import {HttpClientModule} from '@angular/common/http';
import {MenuSettingsComponent} from './panel/card-controls/menu-settings/menu-settings.component';

registerLocaleData(localePt);


@NgModule({
  entryComponents: [
    CreateInvestmentsDialogComponent,
    ListInvestmentsDialogComponent,
    ListConcurrencesDialogComponent,
    ListCostsDialogComponent,
    ListProductsDialogComponent,
    ListMonetizeDialogComponent,
    CreateConcurrencesComponent,
    CreateCostsComponent,
    CreateMonetizeComponent,
    CreateProductsComponent,
    BusinessComponent,
    HelpComponent
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    PanelComponent,
    CreateInvestmentsDialogComponent,
    CardControlsComponent,
    CreateCostsComponent,
    CreateProductsComponent,
    CreateConcurrencesComponent,
    CreateMonetizeComponent,
    HelpComponent,
    BusinessComponent,
    UserComponent,
    MenuInvestmentComponent,
    MenuCostsComponent,
    MenuConcurrencesComponent,
    MenuMonetizeComponent,
    MenuProductsComponent,
    MenuShareComponent,
    MenuSettingsComponent,
    ListInvestmentsDialogComponent,
    ListConcurrencesDialogComponent,
    ListMonetizeDialogComponent,
    ListProductsDialogComponent,
    ListCostsDialogComponent,
    ActionButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
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
    MatBadgeModule,
    FormsModule,
    MatSnackBarModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
