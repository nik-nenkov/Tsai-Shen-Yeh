import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelpComponent } from './app/shared/help/help.component';
import { HomeViewComponent } from './app/view/home-view/home-view.component';

const routes: Routes = [
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: '',
    component: HomeViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
