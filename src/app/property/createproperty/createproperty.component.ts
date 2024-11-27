import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-createproperty',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  templateUrl: './createproperty.component.html',
  styleUrl: './createproperty.component.css'
})
export class CreatepropertyComponent {
  createForm: FormGroup;

  constructor(private fb: FormBuilder, private propertyService: PropertyService) {
    this.createForm = this.fb.group({
      propertyId: [''],
      address: [''],
      yearOfConstruction: [''],
      propertyType: [''],
      vatNumber: ['']
    });
  }
  onSubmit() {
    this.propertyService.createProperty(this.createForm.value).subscribe(() => {
      alert('Property Created Successfully!');
      this.createForm.reset();
    });
  }
}
