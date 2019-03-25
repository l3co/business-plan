import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BusinessComponent} from './startup/business/business.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'create', component: BusinessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
