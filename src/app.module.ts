import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './layers/view/app/app.component';
import { HelpComponent } from './layers/component/core/help/help.component';
import { NavbarComponent } from './layers/component/core/navbar/navbar.component';
import { FooterComponent } from './layers/component/core/footer/footer.component';
import { EventFormComponent } from './layers/component/form/event-form/event-form.component';
import { EventDetailsComponent } from './layers/component/detail/event-details/event-details.component';
import { NoInfoComponent } from './layers/component/core/no-info/no-info.component';
import { SpinnerComponent } from './layers/component/core/spinner/spinner.component';
import { ContactFormComponent } from './layers/component/form/contact-form/contact-form.component';
import { ProductFormComponent } from './layers/component/form/product-form/product-form.component';
import { CardComponent } from './layers/component/shared/card/card.component';
import { TabComponent } from './layers/component/shared/tab/tab.component';
import { SidebarComponent } from './layers/component/core/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HelpComponent,
    NavbarComponent,
    FooterComponent,
    EventFormComponent,
    EventDetailsComponent,
    NoInfoComponent,
    SpinnerComponent,
    ContactFormComponent,
    ProductFormComponent,
    CardComponent,
    TabComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
