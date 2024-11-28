import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PropertyOwnerService } from '../../services/property-owner.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-update',
  standalone: true ,
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  imports: [ReactiveFormsModule, CommonModule, FormsModule] 
})
export class UpdateComponent implements OnInit {
  propertyOwnerForm: FormGroup = new FormGroup({}); // Αρχικοποίηση της φόρμας
  propertyOwnerId: string = ''; // Αρχικοποίηση του ID του χρήστη

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private propertyOwnerService: PropertyOwnerService // Σύνδεση με το service για τη διαχείριση των δεδομένων
  ) {}

  ngOnInit(): void {
    // Λήψη του ID του χρήστη από τη διαδρομή
    const id = this.route.snapshot.paramMap.get('id')!;
    
    // Δημιουργία της φόρμας
    this.propertyOwnerForm = this.formBuilder.group({
      vatNumber: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      propertyType: ['', Validators.required]
    });

    // Φόρτωμα των δεδομένων του χρήστη
    
    if (id) {
      this.loadPropertyOwner(id);}
  }

  loadPropertyOwner(id: string): void {
    this.propertyOwnerService.getPropertyOwnerById(id).subscribe(
      (propertyOwner) => {
        this.propertyOwnerForm.patchValue(propertyOwner); // Φορτώνει τα δεδομένα στη φόρμα
      },
      (error) => {
        console.error('Error loading property owner:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.propertyOwnerForm.invalid) {
      return;
    }

    this.propertyOwnerService.updatePropertyOwner(this.propertyOwnerId, this.propertyOwnerForm.value).subscribe(() => {
      this.router.navigate(['/search']); // Μετά την επιτυχή ενημέρωση, επιστροφή στη σελίδα αναζήτησης
    });
  }

  confirmDelete() {
    const confirmed = window.confirm('Are you sure you want to delete this owner?');
    if (confirmed && this.propertyOwnerId) {
      this.propertyOwnerService.deletePropertyOwner(+this.propertyOwnerId).subscribe(() => {
        alert('Owner deleted successfully.');
        this.router.navigate(['/search']); // Επιστροφή στη λίστα
      }, error => {
        alert('Error deleting property owner: ' + error.message);
      });
    }
  }
}

