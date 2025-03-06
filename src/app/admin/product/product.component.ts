import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  successMessage: string | null = null;
  isProductModalVisible: boolean = false;
  isEditing: boolean = false;
  confirmDeleteModalVisible: boolean = false;
  productData: any = {
    name: '',
    description: '',
    stock: 0,
    imageUrl: ''
  };
  products: any[] = [];  // Product data array
  
  // Open modal to add/edit product
  openProductModal(product?: any) {
    if (product) {
      this.isEditing = true;
      this.productData = { ...product };  // Pre-fill modal with product data
    } else {
      this.isEditing = false;
      this.productData = { name: '', description: '', stock: 0, price: 0, imageUrl: '' };
    }
    this.isProductModalVisible = true;
  }

  // Close modal
  closeProductModal() {
    this.isProductModalVisible = false;
  }

  // Handle form submission for adding/editing product
  onSubmitProduct(form: any) {
    if (form.valid) {
      if (this.isEditing) {
        // Update product
        const index = this.products.findIndex(p => p.id === this.productData.id);
        this.products[index] = { ...this.productData };
        this.successMessage = 'Product updated successfully!';
        setTimeout(() => {
          this.successMessage = null;
        }, 3000);
      } else {
        // Add new product
        const newProduct = { ...this.productData, id: this.products.length + 1 };
        this.products.push(newProduct);
        this.successMessage = 'Product added successfully!';
        setTimeout(() => {
          this.successMessage = null;
        }, 3000);
      }
      this.closeProductModal();
    }
  }

  // Handle image selection
  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.productData.imageUrl = e.target.result; // Store image URL
      };
      reader.readAsDataURL(file);
    }
  }

  // Open delete confirmation modal
  confirmDelete(productId: number) {
    this.confirmDeleteModalVisible = true;
    this.productData.id = productId;
  }

  // Close delete confirmation modal
  closeDeleteConfirmModal() {
    this.confirmDeleteModalVisible = false;
  }

  // Delete product
  deleteProduct() {
    this.products = this.products.filter(p => p.id !== this.productData.id);
    this.successMessage = 'Product deleted successfully!';
    this.closeDeleteConfirmModal();
    setTimeout(() => {
      this.successMessage = null;
    }, 3000);
  }
}
