import { Product, ProductStatus } from '../../shared/models/product.model';

export class ProductClass implements Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
  status: ProductStatus;

  constructor(data: Product) {
    this.id = data.id;
    this.name = data.name;
    this.sku = data.sku;
    this.price = data.price;
    this.stock = data.stock;
    this.status = data.status;
  }

  static initialData: ProductClass[] = [
    new ProductClass({
      id: '1',
      name: 'Taza Cerámica',
      sku: 'TAZ-001',
      price: 9.99,
      stock: 50,
      status: ProductStatus.ACTIVE,
    }),
    new ProductClass({
      id: '2',
      name: 'Camisa Negra',
      sku: 'CAM-NEG-002',
      price: 19.99,
      stock: 15,
      status: ProductStatus.INACTIVE,
    }),
    new ProductClass({
      id: '3',
      name: 'Cuaderno A5',
      sku: 'CUE-A5-003',
      price: 4.5,
      stock: 0,
      status: ProductStatus.ACTIVE,
    }),
    new ProductClass({
      id: '4',
      name: 'Bolígrafo Azul',
      sku: 'BOL-AZUL-004',
      price: 2.99,
      stock: 120,
      status: ProductStatus.INACTIVE,
    }),
    new ProductClass({
      id: '5',
      name: 'Mochila Escolar',
      sku: 'MOCH-ESC-005',
      price: 34.99,
      stock: 25,
      status: ProductStatus.ACTIVE,
    }),
    new ProductClass({
      id: '6',
      name: 'Lámpara de Mesa',
      sku: 'LAM-MESA-006',
      price: 15.75,
      stock: 8,
      status: ProductStatus.INACTIVE,
    }),
    new ProductClass({
      id: '7',
      name: 'Agenda 2025',
      sku: 'AGE-2025-007',
      price: 12.5,
      stock: 40,
      status: ProductStatus.ACTIVE,
    }),
  ];
}
