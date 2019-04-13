import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {RouterModule} from '@angular/router';
import {AppRoutes} from './routes/routes';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { PropertyListingComponent } from './components/property-listing/property-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddPropertyComponent,
    HeaderComponent,
    PropertyListingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
