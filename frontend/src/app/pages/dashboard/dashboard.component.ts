import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../services/admin';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  totalUsers = 0;
  totalOrders = 0;
  totalSales = 0;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getMetrics().subscribe({
      next: (data) => {
        console.log('Metrics RAW:', data);

        this.totalUsers = data.metrics.totalUsers;
        this.totalOrders = data.metrics.totalOrders;
        this.totalSales = data.metrics.totalSales;

        console.log('AFTER ASSIGNMENT:', this.totalUsers, this.totalOrders, this.totalSales);
      },

      error: (err) => {
        console.error('Metrics error:', err);
      },
    });
  }
}
