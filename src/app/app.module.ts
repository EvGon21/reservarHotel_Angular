import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/nav-bar/about/about.component';
import { ContactComponent } from './components/nav-bar/contact/contact.component';
import { RoomTypesComponent } from './components/nav-bar/room-types/room-types.component';
import { FeedbackComponent } from './components/nav-bar/feedback/feedback.component';
import { HeaderComponentComponent } from './components/header/header-component/header-component.component';
import { BodyComponentComponent } from './components/body/body-component/body-component.component';
import { FooterComponentComponent } from './components/footer/footer-component/footer-component.component';
import { SideBarComponentComponent } from './components/side-bar/side-bar-component/side-bar-component.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    RoomTypesComponent,
    FeedbackComponent,
    HeaderComponentComponent,
    BodyComponentComponent,
    FooterComponentComponent,
    SideBarComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
