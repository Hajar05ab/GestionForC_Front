import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbscencesDialogComponent } from './abscences-dialog.component';

describe('AbscencesDialogComponent', () => {
  let component: AbscencesDialogComponent;
  let fixture: ComponentFixture<AbscencesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbscencesDialogComponent]
    });
    fixture = TestBed.createComponent(AbscencesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
