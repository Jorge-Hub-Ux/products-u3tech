import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard } from './dashboard';
import { ProductStatus } from '../../shared/models/product.model';

describe('Dashboard', () => {
  let component: Dashboard;
  let fixture: ComponentFixture<Dashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe agregar un nuevo producto generando un id en los primeros de la lista', () => {
    const cmp = component as unknown as Record<string, any>;
    const initialCount = cmp['products']().length;

    const payload = {
      name: 'Producto Nuevo',
      sku: 'NEW-001',
      price: 12.5,
      stock: 8,
      status: ProductStatus.ACTIVE
    };

    cmp['addProduct'](payload);

    const updated = cmp['products']();
    expect(updated.length).toBe(initialCount + 1);
    const created = updated[0];
    expect(created.name).toBe(payload.name);
    expect(created.sku).toBe(payload.sku);
    expect(created.price).toBe(payload.price);
    expect(created.stock).toBe(payload.stock);
    expect(created.status).toBe(payload.status);
    expect(created.id).toMatch(/^prd-[a-z0-9]{6}$/);
  });
});
