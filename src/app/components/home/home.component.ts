import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router'; // Import Router for navigation
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Define your products array with an ID for routing purposes
  products = [
    { id: '1', image: 'assets/image2.png', productName: 'Orange', price: 300 },
    { id: '2', image: 'assets/image3.png', productName: 'Berries', price: 1500 },
    { id: '3', image: 'assets/image1.png', productName: 'Apple', price: 1500 },
    { id: '4', image: 'assets/image4.png', productName: 'Mango', price: 1500 },
    { id: '5', image: 'assets/image1.png', productName: 'Papaya', price: 1500 },
    { id: '6', image: 'assets/image3.png', productName: 'Watermelon', price: 1500 }
  ];

  constructor(private router: Router) {}
  viewProductDetail(productId: string): void {
    this.router.navigate(['/product', productId]);  // Navigate to the product detail page
  }

  scrollToProducts() {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
