import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginComponent {
  email = '';
  password = '';
  loading = false;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (!this.email || !this.password) {
      alert('Please fill all fields');
      return;
    }

    this.loading = true;

    this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: (res: any) => {
        console.log('Login Response:', res);

        // token is saved automatically inside AuthService (tap())
        alert('Login Successful!');
        this.router.navigate(['/dashboard']);

        this.loading = false;
      },

      error: (err: any) => {
        console.error('Login Error:', err);
        alert(err?.error?.message || 'Invalid credentials');
        this.loading = false;
      },
    });
  }
}
