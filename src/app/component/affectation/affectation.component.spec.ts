import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectationComponent } from './affectation.component';

describe('AffectationComponent', () => {
  let component: AffectationComponent;
  let fixture: ComponentFixture<AffectationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffectationComponent]
    });
    fixture = TestBed.createComponent(AffectationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
