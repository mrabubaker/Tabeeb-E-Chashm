import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryonComponent } from './tryon.component';

describe('TryonComponent', () => {
  let component: TryonComponent;
  let fixture: ComponentFixture<TryonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
