import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  email: string = '';  // Bind the email input to this property
  isEmailSent: boolean = false;  // To show success message after submission
  errorMessage: string = '';  // To store any error messages

  // This method will be triggered when the form is submitted
  onSubmit() {
    // Basic validation
    if (!this.email) {
      this.errorMessage = 'Please enter your email address.';
      this.isEmailSent = false;
      return;
    }

    // Simulate sending email (replace with actual API call)
    this.isEmailSent = true;
    this.errorMessage = '';  // Clear any error message

    // You can also simulate errors like this:
    // this.errorMessage = 'An error occurred. Please try again later.';
  }
}
