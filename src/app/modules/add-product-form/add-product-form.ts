import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Product, ProductStatus } from '../../shared/models/product.model';
import { productValidators } from '../../shared/utils/form-validators';

type NewProductPayload = Omit<Product, 'id'>;

@Component({
  selector: 'app-add-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-product-form.html',
  styleUrl: './add-product-form.css',
})
export class AddProductForm {
  @Output() close = new EventEmitter<void>();
  @Output() submitProduct = new EventEmitter<NewProductPayload>();

  protected readonly loading = signal(false);
  protected readonly statuses = [
    { label: 'Activo', value: ProductStatus.ACTIVE },
    { label: 'Inactivo', value: ProductStatus.INACTIVE },
  ];

  private fb = inject(FormBuilder);

  protected readonly form = this.fb.group({
    name: ['', productValidators.name],
    sku: ['', productValidators.sku],
    price: [null, productValidators.price],
    stock: [null, productValidators.stock],
    status: [ProductStatus.ACTIVE, productValidators.status],
  });


  protected onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    const { name, sku, price, stock, status } = this.form.value;
    const payload: NewProductPayload = {
      name: name!.trim(),
      sku: sku!.trim(),
      price: Number(price),
      stock: Number(stock),
      status: status as ProductStatus,
    };

    setTimeout(() => {
      this.submitProduct.emit(payload);
      this.loading.set(false);
      this.onClose();
      this.form.reset({
        name: '',
        sku: '',
        price: null,
        stock: null,
        status: ProductStatus.ACTIVE,
      });
    }, 1000);
  }

  protected onClose(): void {
    if (this.loading()) {
      return;
    }
    this.close.emit();
  }

  protected fieldError(field: string): boolean {
    const control = this.form.get(field);
    return !!control && control.invalid && (control.dirty || control.touched);
  }
}
