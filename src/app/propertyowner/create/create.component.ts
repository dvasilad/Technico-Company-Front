import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PropertyOwnerService } from '../../services/property-owner.service';


@Component({
  selector: 'app-create',
  standalone: true,
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  imports: [ReactiveFormsModule, CommonModule, FormsModule] 
})
export class CreateComponent {
  owner = {
    vatNumber: '',
    name: '',
    surname: '',
    address: '',
    phoneNumber: '',
    email: '',
    username: '',
    password: '',
    propertyType: 'detached' // Default value
  };

  constructor(private ownerService: PropertyOwnerService, private router: Router) {}

  createOwner(): void {
    this.ownerService.createOwner(this.owner).subscribe(
      () => {
        alert('Property owner created successfully!');
        this.router.navigate(['/property-owner/search']); // Redirect to search page
      },
      (error) => {
        console.error('Error creating property owner', error);
        alert('An error occurred while creating the property owner.');
      }
    );
  }
}
