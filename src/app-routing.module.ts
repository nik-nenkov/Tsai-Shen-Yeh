import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelpComponent } from './layers/component/core/help/help.component';

const routes: Routes = [
  {
    path: 'help',
    component: HelpComponent
  },
  {

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
