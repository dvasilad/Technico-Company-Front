import { Routes } from '@angular/router';
import { CreateComponent } from './propertyowner/create/create.component';
import { SearchComponent } from './propertyowner/search/search.component';
import { UpdateComponent } from './propertyowner/update/update.component';

export const routes: Routes = [
  { path: '', redirectTo: '/create', pathMatch: 'full' },
  { path: 'create', component: CreateComponent },
  { path: 'search', component: SearchComponent },
  { path: 'update/:id', component: UpdateComponent },
  // Προσθέτω και τα επόμενα όταν φτιαχτούν
];

