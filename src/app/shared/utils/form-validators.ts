import { Validators } from '@angular/forms';

export const productValidators = {
  name: [Validators.required, Validators.minLength(3), Validators.pattern(/^[A-Za-z\s]+$/), Validators.maxLength(100)],
  sku: [Validators.required, Validators.pattern(/^[A-Za-z0-9_.-]+$/), Validators.maxLength(40)],
  price: [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/), Validators.maxLength(10)],
  stock: [Validators.required, Validators.pattern(/^\d+$/), Validators.maxLength(10)],
  status: [Validators.required],
};
