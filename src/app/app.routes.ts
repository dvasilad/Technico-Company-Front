import { Routes } from '@angular/router';
import { CreateComponent } from './propertyowner/create/create.component';
import { SearchComponent } from './propertyowner/search/search.component';
import { UpdateComponent } from './propertyowner/update/update.component';
import { CreatepropertyComponent } from './property/createproperty/createproperty.component';
import { SearchpropertyComponent } from './property/searchproperty/searchproperty.component';
import { UpdatepropertyComponent } from './property/updateproperty/updateproperty.component';



export const routes: Routes = [
  { path: '', redirectTo: '/create', pathMatch: 'full' },
  { path: 'propertyowner/create', component: CreateComponent },
  { path: 'propertyowner/search', component: SearchComponent },
  { path: 'propertyowner/update/:id', component: UpdateComponent },
  { path: 'property/createproperty', component: CreatepropertyComponent },
  { path: 'property/searchproperty', component: SearchpropertyComponent },
  { path: 'property/updateproperty/:propertyid', component: UpdatepropertyComponent }
];

