import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { AddProductForm } from '../add-product-form/add-product-form';
import { ProductDetail } from '../product-detail/product-detail';
import { ProductClass } from '../../core/data/products.data';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, AddProductForm, ProductDetail],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  protected readonly search = signal('');
  protected readonly products = signal(ProductClass.initialData);
  protected readonly showAddForm = signal(false);
  protected readonly selectedProduct = signal<Product | null>(null);

  protected readonly filteredProducts = computed(() => {
    const term = this.search().trim().toLowerCase();
    if (!term) {
      return this.products();
    }

    return this.products().filter((product) =>
      `${product.name} ${product.sku}`.toLowerCase().includes(term),
    );
  });

  protected onSearch(term: string): void {
    this.search.set(term);
  }

  protected toggleAddForm(state: boolean): void {
    this.showAddForm.set(state);
  }

  protected addProduct(payload: Omit<Product, 'id'>): void {
    const newProduct: Product = {
      ...payload,
      id: this.generateId(),
    };

    this.products.update((current) => [new ProductClass(newProduct), ...current]);
    this.toggleAddForm(false);
  }

  protected openDetail(product: Product): void {
    this.selectedProduct.set(product);
  }

  protected closeDetail(): void {
    this.selectedProduct.set(null);
  }

  private generateId(): string {
    return `prd-${Math.random().toString(36).slice(2, 8)}`;
  }
}
