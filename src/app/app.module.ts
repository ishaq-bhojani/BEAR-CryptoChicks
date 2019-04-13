import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {RouterModule} from '@angular/router';
import {AppRoutes} from './routes/routes';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { PropertyListingComponent } from './components/property-listing/property-listing.component';
import { FilterPipe } from './filters/filter.pipe';
import {FormsModule} from "@angular/forms";
import { ExactSearchPipe } from './filters/exact-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddPropertyComponent,
    HeaderComponent,
    PropertyListingComponent,
    FilterPipe,
    ExactSearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
