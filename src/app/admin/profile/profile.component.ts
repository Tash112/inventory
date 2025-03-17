import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  successMessage: string | null = null;
  user = {
    profileImage: '',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+254-71-937-0963',
  };

  isEditProfileModalVisible = false;
  isChangePasswordModalVisible = false;
  showAddressDropdown = false;
  showPaymentDropdown = false;

  oldPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  // Toggle dropdown visibility for address and payment
  toggleDropdown(type: string) {
    if (type === 'address') {
      this.showAddressDropdown = !this.showAddressDropdown;
      this.showPaymentDropdown = false; // Close payment dropdown when address is toggled
    } else if (type === 'payment') {
      this.showPaymentDropdown = !this.showPaymentDropdown;
      this.showAddressDropdown = false; // Close address dropdown when payment is toggled
    }
  }

  // Actions for address management
  addAddress() {
    console.log('Adding new address');
    // Logic to add a new address
  }

  editAddress() {
    console.log('Editing address');
    // Logic to edit address
  }

  deleteAddress() {
    console.log('Deleting address');
    // Logic to delete address
  }

  // Actions for payment method selection
  selectPaymentMethod(method: string) {
    console.log(`Selected payment method: ${method}`);
    // Logic to handle the selected payment method
  }

  // Edit profile modal
  editProfile() {
    this.isEditProfileModalVisible = true;
  }

  closeEditProfileModal() {
    this.isEditProfileModalVisible = false;
  }

  updateProfile() {
    console.log('Updating profile...');
    // Logic to update profile details
    this.closeEditProfileModal();
    this.successMessage = 'Profile updated successfully!';
    setTimeout(() => {
      this.successMessage = null;
    }, 3000);
  }

  // Change password modal
  changePassword() {
    this.isChangePasswordModalVisible = true;
  }

  closeChangePasswordModal() {
    this.isChangePasswordModalVisible = false;
  }

  updatePassword() {
    console.log('Changing password...');
    // Logic to change password
    this.closeChangePasswordModal();
    this.successMessage = 'Password changed successfully!';
    setTimeout(() => {
      this.successMessage = null;
    }, 3000);
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.user.profileImage = URL.createObjectURL(file);
    }
  }
}
