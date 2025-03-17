import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserOrderComponent } from './user-order.component';
import { FormsModule } from '@angular/forms';  // If you're using ngModel in the form
import { CommonModule } from '@angular/common';  // CommonModule for basic Angular directives
import { HttpClientTestingModule } from '@angular/common/http/testing';  // For HTTP requests, if needed

describe('UserOrdersComponent', () => {
  let component: UserOrderComponent;
  let fixture: ComponentFixture<UserOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserOrderComponent],  // Declare the component
      imports: [CommonModule, FormsModule, HttpClientTestingModule], // Import necessary modules
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  // Trigger change detection to bind the data
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the list of orders', () => {
    // Check if the orders array is populated and the table displays the orders correctly.
    expect(component.orders.length).toBeGreaterThan(0);  // Ensure there are orders
    const compiled = fixture.nativeElement;
    const tableRows = compiled.querySelectorAll('table tbody tr');
    expect(tableRows.length).toBe(component.orders.length);  // Ensure the table rows match the number of orders
  });

  it('should show the success message when an order is added', () => {
    // Given an order data
    const newOrder = {
      id: 4,
      customer: 'Test Customer',
      product: 'Test Product',
      quantity: 2,
      total: 300,
      status: 'Pending',
      date: new Date()
    };
    component.orderData = { ...newOrder };  // Set the order data for submission

    // Call the method to add an order
    component.onOrderSubmit({ valid: true });

    // Check if the order has been added
    expect(component.orders.length).toBeGreaterThan(0);
    expect(component.successMessage).toBe('Order added successfully!');
  });

  it('should open the order modal for adding a new order', () => {
    component.openOrderModal();
    expect(component.isOrderModalVisible).toBeTrue();  // The modal should be visible
    expect(component.isEditingOrder).toBeFalse();  // It should be in "add" mode
  });

  it('should open the order modal for editing an existing order', () => {
    const orderToEdit = component.orders[0];  // Grab the first order to edit
    component.openOrderModal(orderToEdit);

    expect(component.isOrderModalVisible).toBeTrue();  // The modal should be visible
    expect(component.isEditingOrder).toBeTrue();  // It should be in "edit" mode
    expect(component.orderData).toEqual(orderToEdit);  // The form should be pre-filled with the selected order
  });

  it('should close the order modal', () => {
    component.closeOrderModal();
    expect(component.isOrderModalVisible).toBeFalse();  // The modal should be closed
  });

  it('should delete an order when confirmed', () => {
    const orderToDelete = component.orders[0];  // Get the first order
    component.openDeleteOrderConfirmModal(orderToDelete.id);

    expect(component.confirmDeleteOrderModalVisible).toBeTrue();  // The delete confirmation modal should be visible

    // Simulate the deletion
    component.deleteOrder();
    expect(component.orders.length).toBeLessThan(3);  // Order should be deleted from the list
    expect(component.successMessage).toBe('Order deleted successfully!');
  });

  it('should cancel the order deletion', () => {
    const orderToDelete = component.orders[0];  // Get the first order
    component.openDeleteOrderConfirmModal(orderToDelete.id);

    expect(component.confirmDeleteOrderModalVisible).toBeTrue();  // The delete confirmation modal should be visible

    // Simulate canceling the deletion
    component.closeDeleteConfirmModal();
    expect(component.confirmDeleteOrderModalVisible).toBeFalse();  // The delete confirmation modal should be closed
  });
});
