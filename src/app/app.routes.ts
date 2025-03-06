import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';  
import { ServicesComponent } from './components/services/services.component'; 
import { AboutComponent } from './about/about.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { CartComponent } from './components/cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CategoryComponent } from './admin/category/category.component';
import { ProductComponent } from './admin/product/product.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { UsersComponent } from './admin/users/users.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { UserComponent } from './user/user.component';
import { OverviewComponent } from './user/overview/overview.component';
import { UserOrderComponent } from './user/user-order/user-order.component';
import { HistoryComponent } from './user/history/history.component';

// Define the Routes
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'reset', component: ForgetPasswordComponent },
  { path: 'cart', component: CartComponent },

  { path: 'admin', component: AdminComponent, children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'manage-categories', component: CategoryComponent },
    { path: 'manage-products', component: ProductComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'manage-users', component: UsersComponent },
    { path: 'profile', component: ProfileComponent },
  ] 
},
{ path: 'user', component: UserComponent, children: [
  {path: 'dashboard', component: OverviewComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {path: 'history', component: HistoryComponent},
  { path: 'profile', component: ProfileComponent },
  {path: 'orders', component: UserOrderComponent}

]
}
];
