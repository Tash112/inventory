import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  imports:[CommonModule],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {


  cards = [
    {name: 'Total orders', quantity: '120'},
    {name: 'pending orders',quantity: '20'},
    {name: 'Delivered orders', quantity: '100'},
    {name: 'Wishlist', quantity: '15'},
    {name: 'Recent purchases', quantity: '5'}
  ]


  // Dummy notifications data
  notifications = [
    { message: 'Your order #123 has been shipped.', date: new Date() },
    { message: 'New sale: 20% off on Electronics.', date: new Date() },
    { message: 'Your wishlist item is now back in stock!', date: new Date() }
  ];

  constructor() { }

  ngOnInit(): void {
    // You can fetch real-time data here from your backend (e.g., API calls)
  }

}
