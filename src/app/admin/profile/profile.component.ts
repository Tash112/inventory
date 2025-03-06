import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
onImageSelected($event: Event) {
throw new Error('Method not implemented.');
}
triggerImageUpload() {
throw new Error('Method not implemented.');
}
  // User Profile Data
  userProfile = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+123456789',
    role: 'Manager',
    image: 'assets/image1.png'
  };

  // Modal visibility flags
  isEditProfileModalVisible = false;
  isChangePasswordModalVisible = false;

  // Form data
  passwordData = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  // Success message
  successMessage: string | null = null;

  // Open Edit Profile Modal
  openEditProfileModal() {
    this.isEditProfileModalVisible = true;
  }

  // Close Edit Profile Modal
  closeEditProfileModal() {
    this.isEditProfileModalVisible = false;
  }

  // Open Change Password Modal
  openChangePasswordModal() {
    this.isChangePasswordModalVisible = true;
  }

  // Close Change Password Modal
  closeChangePasswordModal() {
    this.isChangePasswordModalVisible = false;
  }

  // Submit Profile Form
  onSubmit(form: any) {
    if (form.valid) {
      this.successMessage = 'Profile updated successfully!';
      // Here, make an API call to update the profile data on the server.
      this.closeEditProfileModal();
    }
  }

  // Submit Change Password Form
  onChangePassword(form: any) {
    if (form.valid && this.passwordData.newPassword === this.passwordData.confirmPassword) {
      this.successMessage = 'Password updated successfully!';
      // Here, make an API call to update the password on the server.
      this.closeChangePasswordModal();
    } else {
      this.successMessage = 'Passwords do not match.';
    }
  }
}
