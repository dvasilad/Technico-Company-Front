import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PropertyrepairService } from '../../services/property-repair.service';

@Component({
  selector: 'app-createrepair',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './create-repair.component.html',
  styleUrl: './create-repair.component.css'
})
export class CreaterepairComponent {
  repairForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private repairService: PropertyrepairService,
    private router: Router
  ) {
    this.repairForm = this.fb.group({
      date: [''],
      status: ['Pending'],
      type: [''],
      cost: [''],
      address: [''],
      owner: [''],
      description: [''],
    });
  }
  onSubmit() {
    this.repairService.createRepair(this.repairForm.value).subscribe(() => {
      alert('Repair created successfully!');
      this.router.navigate(['/propertyrepair/search']);
    });
  }

}
