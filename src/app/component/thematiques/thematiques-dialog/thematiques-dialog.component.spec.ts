import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThematiquesDialogComponent } from './thematiques-dialog.component';

describe('ThematiquesDialogComponent', () => {
  let component: ThematiquesDialogComponent;
  let fixture: ComponentFixture<ThematiquesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThematiquesDialogComponent]
    });
    fixture = TestBed.createComponent(ThematiquesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
