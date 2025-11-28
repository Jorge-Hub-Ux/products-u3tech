import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetail } from './product-detail';
import { ProductStatus } from '../../shared/models/product.model';

describe('ProductDetail', () => {
  let component: ProductDetail;
  let fixture: ComponentFixture<ProductDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetail);
    component = fixture.componentInstance;
    component.product = {
      id: '1',
      name: 'Producto Demo',
      sku: 'SKU-001',
      price: 10,
      stock: 5,
      status: ProductStatus.ACTIVE
    };
    fixture.detectChanges();
  });

  it('Debe crear un producto', () => {
    expect(component).toBeTruthy();
  });
});
