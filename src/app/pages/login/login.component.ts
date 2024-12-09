import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // Mock user roles for demonstration purposes
    const mockUsers = [
      { email: 'admin@technico.com', password: 'admin123', role: 'admin' },
      { email: 'user@technico.com', password: 'user123', role: 'user' }
    ];

    const user = mockUsers.find(u => u.email === this.email && u.password === this.password);

    if (user) {
      if (user.role === 'admin') {
        this.router.navigate(['/admin-home']);
      } else if (user.role === 'user') {
        this.router.navigate(['/user-home']);
      }
    } else {
      this.errorMessage = 'Invalid email or password';
    }
  }
}
