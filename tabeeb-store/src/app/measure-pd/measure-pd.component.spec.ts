import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurePDComponent } from './measure-pd.component';

describe('MeasurePDComponent', () => {
  let component: MeasurePDComponent;
  let fixture: ComponentFixture<MeasurePDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasurePDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurePDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
