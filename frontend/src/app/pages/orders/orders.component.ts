import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../services/admin';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: any[] = [];

  constructor(private admin: AdminService) {}

  ngOnInit() {
    this.admin.getAllOrders().subscribe({
      next: (res: any) => {
        console.log("ORDERS RESPONSE:", res);
        this.orders = res.orders;   // backend must return { orders: [] }
      },

      error: (err) => {
        console.error("Orders Error:", err);
      }
    });
  }
}
