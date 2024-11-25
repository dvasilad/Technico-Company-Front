import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PropertyOwnerService } from '../../services/property-owner.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone: true ,
  imports: [RouterModule, CommonModule] 
})
export class SearchComponent {

  searchVATNumber: string = '';
  searchEmail: string = '';
propertyOwners = [
  { id: 1, Vat: 123456789, name: 'John', surname: 'Doe', email: 'john@example.com' },
  { id: 2, Vat: 987654321, name: 'Jane', surname: 'Smith', email: 'jane@example.com' },
  { id: 3, Vat: 132435465, name: 'Bill', surname: 'Lang', email: 'bill@example.com' }
];
owner: any;
  router: any;

constructor(private propertyOwnerService: PropertyOwnerService) {}

navigateToUpdate(id: number) {
  this.router.navigate(['/update', id]);
}

confirmDelete(id: number) {
  const confirmed = window.confirm('Are you sure you want to delete this owner?');
  if (confirmed) {
    this.propertyOwnerService.deletePropertyOwner(id).subscribe(() => {
      this.propertyOwners = this.propertyOwners.filter(owner => owner.id !== id);
      alert('Owner deleted successfully.');
    });
  }
}


  onSearch() {
    console.log('Searching for:', {
      VATNumber: this.searchVATNumber,
      Email: this.searchEmail
    });
  }
  
}

