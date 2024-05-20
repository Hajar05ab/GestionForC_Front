import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThematiquesComponent } from './thematiques.component';

describe('ThematiquesComponent', () => {
  let component: ThematiquesComponent;
  let fixture: ComponentFixture<ThematiquesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThematiquesComponent]
    });
    fixture = TestBed.createComponent(ThematiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
