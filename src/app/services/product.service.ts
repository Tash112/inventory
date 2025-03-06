// product.service.ts
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [];

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(name: string, description: string): void {
    const newProduct: Product = {
      id: this.products.length + 1,
      name,
      description,
    };
    this.products.push(newProduct);
  }

  updateProduct(id: number, name: string, description: string): void {
    const product = this.products.find((p) => p.id === id);
    if (product) {
      product.name = name;
      product.description = description;
    }
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter((p) => p.id !== id);
  }
}
