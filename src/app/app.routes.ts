import { Routes } from '@angular/router';
import { CreateComponent } from './propertyowner/create/create.component';
import { SearchComponent } from './propertyowner/search/search.component';
import { UpdateComponent } from './propertyowner/update/update.component';
import { CreatepropertyComponent } from './property/create-property/create-property.component';
import { SearchpropertyComponent } from './property/search-property/search-property.component';
import { UpdatepropertyComponent } from './property/update-property/update-property.component';
import { CreaterepairComponent } from './propertyrepair/createrepair/create-repair.component';
import { SearchrepairComponent } from './propertyrepair/searchrepair/search-repair.component';
import { UpdaterepairComponent } from './propertyrepair/updaterepair/update-repair.component';
import { NotFound404Component } from './pages/not-found-404/not-found-404.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { LoginComponent } from './pages/login/login.component';




export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin-home',  component: AdminHomeComponent  },
  { path: 'user-home', component: UserHomeComponent },
  { path: 'propertyowner/create', component: CreateComponent },
  { path: 'propertyowner/search', component: SearchComponent },
  { path: 'propertyowner/update/:id', component: UpdateComponent },
  { path: 'property/create-property', component: CreatepropertyComponent },
  { path: 'property/search-property', component: SearchpropertyComponent },
  { path: 'property/update-property/:propertyid', component: UpdatepropertyComponent },
  { path: 'propertyrepair/create-repair', component: CreaterepairComponent },
  { path: 'propertyrepair/search-repair', component: SearchrepairComponent },
  { path: 'propertyrepair/update/:repairid', component: UpdaterepairComponent },
  { path: "**", component: NotFound404Component}
];

