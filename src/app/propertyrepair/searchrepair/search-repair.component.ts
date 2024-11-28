import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PropertyrepairService } from '../../services/property-repair.service';

@Component({
  selector: 'app-searchrepair',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  templateUrl: './search-repair.component.html',
  styleUrl: './search-repair.component.css'
})
export class SearchrepairComponent {
  repairs: any[] = [
    {
      id: 1,date: '2023-11-01T10:00',
      status: 'Pending',
      type: 'Painting',
      cost: 150.00,
      address: 'Merlin 123',
      owner: 'John Doe',
      description: 'Repainting the living room walls.',
    },
    {
      id: 2,
      date: '2023-10-15T14:30',
      status: 'In progress',
      type: 'Plumbing',
      cost: 200.00,
      address: 'Digeni 34',
      owner: 'Jane Smith',
      description: 'Fixing the bathroom pipes.',
    },
    {
      id: 3,
      date: '2023-09-20T09:00',
      status: 'Complete',
      type: 'Electrical Work',
      cost: 300.00,
      address: 'Stadiou 5',
      owner: 'Mike Johnson',
      description: 'Upgrading electrical wiring in the kitchen.',
    },
  ];
  searchCriteria = {
    dateRange: '',
    ownerId: '',
  };
  

  constructor(private repairService: PropertyrepairService) {}

  onSearch() {
    this.repairService.getRepairs(this.searchCriteria).subscribe((repairs) => {
      this.repairs = repairs;
    });
  }
  onDelete(repairId: number): void {
    // Κλήση του service για διαγραφή της επισκευής
    this.repairService.deleteRepair(repairId.toString()).subscribe({
      next: () => {
        this.repairs = this.repairs.filter((repair) => repair.id !== repairId);
        alert('Repair deleted successfully!');
      }
      
    });
  }
  
}
