import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  // An array of services related to smart inventory management
  services = [
    { 
      title: 'Inventory Tracking', 
      description: 'Real-time tracking of stock levels and inventory locations to ensure smooth operations.',
      link: '/services/inventory-tracking',
      icon: 'assets/image1.png'
    },
    { 
      title: 'Stock Alerts', 
      description: 'Get notified when stock levels are low or critical. Never run out of stock unexpectedly.',
      link: '/services/stock-alerts',
      icon: 'assets/image2.png'
    },
    { 
      title: 'Sales and Stock Reports', 
      description: 'Generate detailed reports on stock movement, sales trends, and inventory health.',
      link: '/services/reports',
      icon: 'assets/image3.png'
    },
    { 
      title: 'Automated Reordering', 
      description: 'Automate reordering of products when stock levels drop below a threshold to ensure constant supply.',
      link: '/services/automated-reordering',
      icon: 'assets/image4.png'
    }
  ];

  constructor() {}

  // Method to handle "Learn More" button clicks
  onLearnMore(service: any): void {
    console.log(`User wants to learn more about: ${service.title}`);
    // You can navigate to the detailed page or display more information in a modal, etc.
  }
}
