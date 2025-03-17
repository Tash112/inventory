import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, NavbarComponent],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
addToCart() {
throw new Error('Method not implemented.');
}
goBack() {
throw new Error('Method not implemented.');
}
  product: any;
isMobile: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the product ID from the route parameters
    const productId = this.route.snapshot.paramMap.get('id');
    this.product = this.getProductDetails(productId);
  }

  // Sample function to get product details (replace with your real product data logic)
  getProductDetails(id: string | null) {
    const products = [
      { id: '1', productName: 'Orange', price: 300, image: 'assets/image2.png' },
      { id: '2', productName: 'Berries', price: 1500, image: 'assets/image3.png' },
      { id: '3', productName: 'Apple', price: 1500, image: 'assets/image2.png' },
      // ... more products
    ];
    return products.find(product => product.id === id);
  }
}
