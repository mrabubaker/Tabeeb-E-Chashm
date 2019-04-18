import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpencameraComponent } from './opencamera.component';

describe('OpencameraComponent', () => {
  let component: OpencameraComponent;
  let fixture: ComponentFixture<OpencameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpencameraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpencameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
