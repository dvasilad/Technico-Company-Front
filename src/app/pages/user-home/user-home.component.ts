import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {

  userRepairs = [
    { id: 1, title: 'Kitchen Plumbing Repair', status: 'Scheduled', date: '2024-12-10', time: '14:00' },
    { id: 2, title: 'Bathroom Leak Repair', status: 'In Progress', date: '2024-12-09', time: '10:00' },
    { id: 3, title: 'Air Conditioner Maintenance', status: 'Completed', date: '2024-12-08', time: '16:00' }
  ];

  constructor() {}

  ngOnInit(): void {
    // Εδώ θα μπορούσες να κάνεις fetch τα δεδομένα από το backend μέσω υπηρεσίας
  }
}
