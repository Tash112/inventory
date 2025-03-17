import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-order',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css']
})
export class UserOrderComponent {
  successMessage: string | null = null;
  isOrderModalVisible: boolean = false;
  confirmDeleteOrderModalVisible: boolean = false;
  isEditingOrder: boolean = false;
  orderToDeleteId: number | null = null;

  orders = [
    { id: 1, customer: 'John Doe', product: 'Laptop', quantity: 1, total: 1200, status: 'Pending' },
    { id: 2, customer: 'Jane Smith', product: 'Smartphone', quantity: 2, total: 1500, status: 'Shipped' },
    { id: 3, customer: 'Alice Johnson', product: 'Headphones', quantity: 1, total: 200, status: 'Delivered' },
  ];

  orderData = { id: 0, customer: '', product: '', quantity: 0, total: 0, status: 'Pending' };

  openOrderModal(order: any = null): void {
    if (order) {
      this.isEditingOrder = true;
      this.orderData = { ...order }; // Populate data for editing
    } else {
      this.isEditingOrder = false;
      this.orderData = { id: 0, customer: '', product: '', quantity: 0, total: 0, status: 'Pending' }; // Clear data for adding
    }
    this.isOrderModalVisible = true;
  }

  closeOrderModal(): void {
    this.isOrderModalVisible = false;
    this.isEditingOrder = false;
  }

  onOrderSubmit(orderForm: any): void {
    if (orderForm.valid) {
      if (this.isEditingOrder) {
        const index = this.orders.findIndex(order => order.id === this.orderData.id);
        if (index > -1) {
          this.orders[index] = { ...this.orderData };
          this.successMessage = 'Order updated successfully';
        }
      } else {
        const newId = this.orders.length ? Math.max(...this.orders.map(order => order.id)) + 1 : 1;
        this.orders.push({ ...this.orderData, id: newId });
        this.successMessage = 'Order added successfully';
      }
      this.closeOrderModal();
    }
  }

  confirmDeleteOrder(orderId: number): void {
    this.orderToDeleteId = orderId;
    this.confirmDeleteOrderModalVisible = true;
  }

  closeDeleteConfirmModal(): void {
    this.confirmDeleteOrderModalVisible = false;
    this.orderToDeleteId = null;
  }

  deleteOrder(): void {
    if (this.orderToDeleteId !== null) {
      this.orders = this.orders.filter(order => order.id !== this.orderToDeleteId);
      this.successMessage = 'Order deleted successfully';
      this.closeDeleteConfirmModal();
    }
  }
}
