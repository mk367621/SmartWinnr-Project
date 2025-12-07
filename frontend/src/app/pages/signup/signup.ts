import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css'],
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  signup() {
    if (!this.name || !this.email || !this.password) {
      alert('Please fill all fields');
      return;
    }

    this.loading = true;

    this.authService
      .signup({
        name: this.name,
        email: this.email,
        password: this.password,
      })
      .subscribe({
        next: (res) => {
          console.log('Signup response:', res);
          alert(res?.message || 'Signup successful');
          this.loading = false;

          // after signup, redirect to login
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Signup error:', err);
          alert(err?.error?.message || 'Signup failed');
          this.loading = false;
        },
      });
  }
}
