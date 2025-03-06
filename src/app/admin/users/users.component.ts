import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  // Users data (example data structure)
  users = [
    {
      id: 1,
      username: 'john_doe',
      email: 'john.doe@example.com',
      role: 'admin',
      purchaseHistory: ['Item 1', 'Item 2'],
      contactInfo: { phone: '123-456-7890', address: '123 Main St' },
      reviews: [
        { comment: 'Great product!', rating: 5 },
        { comment: 'Very satisfied.', rating: 4 }
      ]
    },
    {
      id: 2,
      username: 'jane_smith',
      email: 'jane.smith@example.com',
      role: 'user',
      purchaseHistory: ['Item A', 'Item B'],
      contactInfo: { phone: '987-654-3210', address: '456 Oak St' },
      reviews: [
        { comment: 'Good quality.', rating: 4 },
        { comment: 'Not as expected.', rating: 2 }
      ]
    }
  ];

  isUserModalVisible = false;
  isEditing = false;
  userData: any = { id: 0, username: '', email: '', role: 'user', purchaseHistory: [], contactInfo: { phone: '' }, reviews: [] };

  isUserDetailsModalVisible = false;
  userDetails: any = {};

  successMessage: string | null = null;

  confirmDeleteModalVisible = false;
  userToDeleteId: number | null = null;

  // Open modal for adding or editing user
  openUserModal(user: any = null) {
    this.isUserModalVisible = true;
    if (user) {
      this.isEditing = true;
      this.userData = { ...user };
    } else {
      this.isEditing = false;
      this.userData = { id: 0, username: '', email: '', role: 'user', purchaseHistory: [], contactInfo: { phone: '' }, reviews: [] };
    }
  }

  // Close user modal
  closeUserModal() {
    this.isUserModalVisible = false;
  }

  // Handle form submission (add or edit user)
  onSubmit(userForm: any) {
    if (this.isEditing) {
      const index = this.users.findIndex(user => user.id === this.userData.id);
      if (index > -1) {
        this.users[index] = { ...this.userData };
      }
      this.successMessage = 'User updated successfully!';
      setTimeout(() => {
        this.successMessage = null;
      }, 3000);
    } else {
      const newUser = { ...this.userData, id: this.users.length + 1 };
      this.users.push(newUser);
      this.successMessage = 'User added successfully!';
    }
    setTimeout(() => {
      this.successMessage = null;
    }, 3000);
    this.closeUserModal();
  }

  // View details of a user (purchase history, contact info, reviews)
  viewUserDetails(user: any) {
    this.userDetails = user;
    this.isUserDetailsModalVisible = true;
  }

  // Close user details modal
  closeUserDetailsModal() {
    this.isUserDetailsModalVisible = false;
    this.userDetails = {};
  }

  // Confirm deletion of a user
  confirmDelete(userId: number) {
    this.confirmDeleteModalVisible = true;
    this.userToDeleteId = userId;
  }

  // Close delete confirmation modal
  closeDeleteConfirmModal() {
    this.confirmDeleteModalVisible = false;
    this.userToDeleteId = null;
  }

  // Delete a user
  deleteUser() {
    if (this.userToDeleteId !== null) {
      this.users = this.users.filter(user => user.id !== this.userToDeleteId);
      this.successMessage = 'User deleted successfully!';
    }
    this.closeDeleteConfirmModal();
  }
}
