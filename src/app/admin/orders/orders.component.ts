import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-orders',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
onStatusChange(_t18: { id: number; customerName: string; totalPrice: number; status: string; }) {
throw new Error('Method not implemented.');
}
  successMessage: string | null = null;
  orders = [
    { id: 1, customerName: 'John Doe', totalPrice: 200, status: 'Pending' },
    { id: 2, customerName: 'Jane Smith', totalPrice: 150, status: 'Shipped' },
    { id: 3, customerName: 'Alice Johnson', totalPrice: 300, status: 'Delivered' }
  ];

  isCustomerModalVisible: boolean = false;
  customerData: any = null;

  // Process Order (Mark as Shipped)
  processOrder(order: any) {
    if (order.status === 'Pending') {
      order.status = 'Shipped';
      this.successMessage = `Order ID ${order.id} has been marked as Shipped.`;
    } else {
      this.successMessage = `Order ID ${order.id} cannot be marked as Shipped.`;
    }
  }

  // Complete Order (Mark as Delivered)
  completeOrder(order: any) {
    if (order.status === 'Shipped') {
      order.status = 'Delivered';
      this.successMessage = `Order ID ${order.id} has been marked as Delivered.`;
    } else {
      this.successMessage = `Order ID ${order.id} cannot be completed.`;
    }
  }
  

  // View Customer Details
  viewCustomerDetails(order: any) {
    this.customerData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      orderHistory: [
        { id: 1, status: 'Shipped', totalPrice: 200 },
        { id: 2, status: 'Delivered', totalPrice: 150 }
      ]
    };
    this.isCustomerModalVisible = true;
  }

  // Close Customer Modal
  closeCustomerModal() {
    this.isCustomerModalVisible = false;
  }
}
