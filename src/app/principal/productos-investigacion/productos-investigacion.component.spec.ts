import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosInvestigacionComponent } from './productos-investigacion.component';

describe('ProductosInvestigacionComponent', () => {
  let component: ProductosInvestigacionComponent;
  let fixture: ComponentFixture<ProductosInvestigacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosInvestigacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
