import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PanelComponent} from './panel/panel.component';
import {PrivacyComponent} from './privacy/privacy.component';

const routes: Routes = [
  {path: '', component: PanelComponent},
  {path: 'privacy', component: PrivacyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
