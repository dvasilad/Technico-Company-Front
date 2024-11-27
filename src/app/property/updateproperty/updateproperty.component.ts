import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-updateproperty',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  templateUrl: './updateproperty.component.html',
  styleUrl: './updateproperty.component.css'
})
export class UpdatepropertyComponent implements OnInit {
  updateForm: FormGroup = new FormGroup({}); 
  propertyId: string= '';
  formBuilder: any;

  constructor(
    private fb: FormBuilder,
    private propertyService: PropertyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.updateForm = this.fb.group({
      propertyId: [''],
      address: [''],
      yearOfConstruction: [''],
      propertyType: [''],
      vatNumber: ['']
    });

    this.propertyId = this.route.snapshot.paramMap.get('propertyid')!;
    this.propertyService.getPropertyById(this.propertyId).subscribe((property) => {
      if (property) {
        this.updateForm.patchValue(property); // Γέμισμα της φόρμας
      } else {
        alert('Property not found!');
        this.router.navigate(['/property/searchproperty']);
      }
      
    });
    

    this.loadProperty();
  }
  loadProperty() {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    this.propertyService
      .updateProperty(this.propertyId, this.updateForm.value)
      .subscribe(() => {
        alert('Property Updated Successfully!');
        this.router.navigate(['/property/search']);
      });
  }
  
  onDelete(): void {
    if (confirm('Are you sure you want to delete this property?')) {
      this.propertyService.deleteProperty(this.propertyId).subscribe(() => {
        alert('Property deleted successfully!');
        this.router.navigate(['/property/search']);
      }, error => {
        alert('Error deleting property: ' + error.message);
      });
    }
  }
}
