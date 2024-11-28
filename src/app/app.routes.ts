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



export const routes: Routes = [
  { path: '', redirectTo: '/create', pathMatch: 'full' },
  { path: 'propertyowner/create', component: CreateComponent },
  { path: 'propertyowner/search', component: SearchComponent },
  { path: 'propertyowner/update/:id', component: UpdateComponent },
  { path: 'property/create-property', component: CreatepropertyComponent },
  { path: 'property/search-property', component: SearchpropertyComponent },
  { path: 'property/update-property/:propertyid', component: UpdatepropertyComponent },
  { path: 'propertyrepair/create-repair', component: CreaterepairComponent },
  { path: 'propertyrepair/search-repair', component: SearchrepairComponent },
  { path: 'propertyrepair/update/:repairid', component: UpdaterepairComponent }
];

