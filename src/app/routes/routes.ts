import {Routes} from '@angular/router';
import {AppComponent} from '../app.component';
import {LoginComponent} from '../components/login/login.component';
import {AddPropertyComponent} from '../components/add-property/add-property.component';
import {PropertyListingComponent} from '../components/property-listing/property-listing.component';

/*Components*/


export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'app',
    component: AppComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'add-property',
    component: AddPropertyComponent
  },
  {
    path: 'property-listings',
    component: PropertyListingComponent
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];
