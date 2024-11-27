import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-searchproperty',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  templateUrl: './searchproperty.component.html',
  styleUrl: './searchproperty.component.css'
})
export class SearchpropertyComponent {
  searchCriteria = { propertyId: '', vatNumber: '' };
  properties: any[] = [
    { propertyId: 'P001', address: 'Merlin 123', yearOfConstruction: 1995, propertyType: 'Detached House', vatNumber: '123456789' },
    { propertyId: 'P002', address: 'Digeni 34', yearOfConstruction: 2000, propertyType: 'Apartment Building', vatNumber: '987654321' },
    { propertyId: 'P003', address: 'Stadiou 5', yearOfConstruction: 1980, propertyType: 'Maisonette', vatNumber: '456123789' },
    { propertyId: 'P004', address: 'Antonopoulou 56', yearOfConstruction: 2015, propertyType: 'Detached House', vatNumber: '123789456' },
    { propertyId: 'P005', address: 'Ermou 12', yearOfConstruction: 2020, propertyType: 'Maisonette', vatNumber: '789456123' }
  ];

  constructor(private propertyService: PropertyService) {}

  onSearch() {
    this.propertyService.searchProperties(this.searchCriteria).subscribe((data) => {
      this.properties = data;
    });
  }
  onDelete(id: string) {
    if (confirm('Are you sure you want to delete this property?')) {
      this.propertyService.deleteProperty(id).subscribe(() => {
        alert('Property Deleted Successfully!');
        this.onSearch();
      });
    }
  }
}
