import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryonCameraComponent } from './tryon-camera.component';

describe('TryonCameraComponent', () => {
  let component: TryonCameraComponent;
  let fixture: ComponentFixture<TryonCameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryonCameraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryonCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
