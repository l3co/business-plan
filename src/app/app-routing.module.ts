import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BusinessComponent} from './startup/business/business.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'business', component: BusinessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
