import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  // Card items data
  cardItems = [
    { title: 'Total Product', quantity: '10,500' },
    { title: 'Pending Orders', quantity: '2' },
    { title: 'Low Stock Alert', quantity: '5' },
    { title: 'Total Revenue', quantity: '100,000' },
    { title: 'Total Customers', quantity: '1,200' }
  ];

  // Monthly sales data
  monthlySales = [
    { month: 'January', amount: 10000 },
    { month: 'February', amount: 15000 },
    { month: 'March', amount: 20000 },
    { month: 'April', amount: 25000 },
    { month: 'May', amount: 18000 },
    { month: 'June', amount: 22000 }
  ];

  // Sales by region
  salesByRegion = [
    { region: 'Nairobi', sales: 50000 },
    { region: 'Central', sales: 35000 },
    { region: 'Rift Valley', sales: 30000 },
    { region: 'Coast', sales: 15000 },
    { region: 'Eastern', sales: 12000 },
    { region: 'Western', sales: 18000 },
    { region: 'Nyanza', sales: 22000 }
  ];

  // Sales by category
  salesByCategory = [
    { category: 'Electronics', sales: 40000 },
    { category: 'Clothing', sales: 25000 },
    { category: 'Home Appliances', sales: 20000 },
    { category: 'Books', sales: 12000 },
    { category: 'Groceries', sales: 15000 }
  ];
}
