import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './app/root.component';
import { HelpComponent } from './app/shared/help/help.component';
import { EventFormComponent } from './app/form/event-form/event-form.component';
import { EventDetailsComponent } from './app/details/event-details/event-details.component';
import { NoInfoComponent } from './app/shared/no-info/no-info.component';
import { SpinnerComponent } from './app/shared/spinner/spinner.component';
import { ContactFormComponent } from './app/form/contact-form/contact-form.component';
import { ProductFormComponent } from './app/form/product-form/product-form.component';
import { TabComponent } from './app/shared/tab/tab.component';
import { SharedModule } from './app/shared/shared.module';
import { HomeViewComponent } from './app/view/home-view/home-view.component';

@NgModule({
  declarations: [
    RootComponent,
    HelpComponent,
    EventFormComponent,
    EventDetailsComponent,
    NoInfoComponent,
    SpinnerComponent,
    ContactFormComponent,
    ProductFormComponent,
    TabComponent,
    HomeViewComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
