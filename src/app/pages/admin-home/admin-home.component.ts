import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent implements OnInit {

    today: string = '';
    activeRepairs: { id: number; title: string; time: string }[] = [];
  
    constructor(private router: Router) {}
  
    ngOnInit() {
      // Υπολογισμός της σημερινής ημερομηνίας
      const now = new Date();
      this.today = now.toISOString().split('T')[0];

  
      // Mock δεδομένα για active repairs της ημέρας
      this.activeRepairs = [
        { id: 1, title: 'Fix Plumbing', time: '10:00 AM' },
        { id: 2, title: 'Electrical Repair', time: '02:00 PM' },
      ];
    }
}
