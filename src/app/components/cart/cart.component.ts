import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-cart',
  standalone:true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
itemCount: any;
viewCart() {
throw new Error('Method not implemented.');
}
cartItemCount: any;
navigateToCart() {
throw new Error('Method not implemented.');
}

}
