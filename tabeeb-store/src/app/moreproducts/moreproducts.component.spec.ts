import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreproductsComponent } from './moreproducts.component';

describe('MoreproductsComponent', () => {
  let component: MoreproductsComponent;
  let fixture: ComponentFixture<MoreproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
