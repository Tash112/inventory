import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-category',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categories = [
    { id: 1, name: 'Electronics', description: 'Devices and gadgets' },
    { id: 2, name: 'Clothing', description: 'Apparel and fashion' }
  ];
  categoryData = { name: '', description: '' };
  isEditing = false;
  currentCategoryId: number | null = null;
  successMessage: string | null = null;
  isCategoryModalVisible = false;
  confirmDeleteModalVisible = false;

  openCategoryModal(category?: { id: number; name: string; description: string }) {
    this.isEditing = !!category;
    if (category) {
      this.categoryData = { name: category.name, description: category.description };
      this.currentCategoryId = category.id;
    } else {
      this.categoryData = { name: '', description: '' };
      this.currentCategoryId = null;
    }
    this.isCategoryModalVisible = true;
  }

  onSubmit(form: any) {
    if (this.isEditing && this.currentCategoryId !== null) {
      // Update category
      const index = this.categories.findIndex(cat => cat.id === this.currentCategoryId);
      if (index !== -1) {
        this.categories[index] = { ...this.categories[index], ...this.categoryData };
      }
      this.successMessage = 'Category updated successfully';
      setTimeout(() => {
        this.successMessage = null;
      }, 3000);
    } else {
      // Add new category
      const newCategory = { id: this.categories.length + 1, ...this.categoryData };
      this.categories.push(newCategory);
      this.successMessage = 'Category added successfully';
      setTimeout(() => {
        this.successMessage = null;
      }, 3000);
    }
    this.closeCategoryModal();
  }

  closeCategoryModal() {
    this.isCategoryModalVisible = false;
  }

  confirmDelete(id: number) {
    this.currentCategoryId = id;
    this.confirmDeleteModalVisible = true;
  }

  closeDeleteConfirmModal() {
    this.confirmDeleteModalVisible = false;
  }

  deleteCategory() {
    if (this.currentCategoryId !== null) {
      this.categories = this.categories.filter(cat => cat.id !== this.currentCategoryId);
      this.successMessage = 'Category deleted successfully';
      setTimeout(() => {
        this.successMessage = null;
      }, 3000);
    }
    this.closeDeleteConfirmModal();
  }
}