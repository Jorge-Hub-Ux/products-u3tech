export interface Product {
  id:     string;
  name:   string;
  sku:    string;
  price:  number;
  stock:  number;
  status: ProductStatus;
}

export enum ProductStatus {
  INACTIVE = 'inactive',
  ACTIVE = 'active',
}
