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
import {FormsModule} from '@angular/forms';
import { ExactSearchPipe } from './filters/exact-search.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ConfirmDialogComponent } from './components/templates/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddPropertyComponent,
    HeaderComponent,
    PropertyListingComponent,
    FilterPipe,
    ExactSearchPipe,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [
    ConfirmDialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
