import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products  = [
    {image: 'assets/image2.png', productName: 'orange', price: '300'},
    {image: 'assets/image3.png', productName: 'berries', price: '1500'},
    {image: 'assets/image2.png', productName: 'orange', price: '1500'},
    {image: 'assets/image2.png', productName: 'orange', price: '1500'},
    {image: 'assets/image2.png', productName: 'orange', price: '1500'},
    {image: 'assets/image2.png', productName: 'orange', price: '1500'},
    {image: 'assets/image2.png', productName: 'orange', price: '1500'},
  
  ]
}
