import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesproductsComponent } from './categoriesproducts.component';

describe('CategoriesproductsComponent', () => {
  let component: CategoriesproductsComponent;
  let fixture: ComponentFixture<CategoriesproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
