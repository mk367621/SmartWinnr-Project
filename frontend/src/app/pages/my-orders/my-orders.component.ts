import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersService } from '../../services/order.service';

@Component({
  selector: 'app-my-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
})
export class MyOrdersComponent implements OnInit {
  myOrders: any[] = [];

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.ordersService.getMyOrders().subscribe({
      next: (res: any) => {
        console.log('MY ORDERS RESPONSE:', res);
        this.myOrders = res.orders || [];
      },
      error: (err: any) => console.error(err),
    });
  }
}
