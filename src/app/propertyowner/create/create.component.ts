import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PropertyOwnerService } from '../../services/property-owner.service';


@Component({
  selector: 'app-create',
  standalone: true,
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  imports: [ReactiveFormsModule, CommonModule, FormsModule] 
})
export class CreateComponent implements OnInit {

  fb: any;
  createForm: FormGroup = new FormGroup({}); 
  owner: any;

  constructor(
    private ownerService: PropertyOwnerService, 
    private router: Router) {}
    
  ngOnInit(): void {
    this.createForm = this.fb.group({
      vatNumber: [''],
      name: [''],
      surname: [''],
      address: [''],
      phoneNumber: [''],
      email: [''],
      username: [''],
      password: [''],
      propertyType: ['']
    });
  }

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
