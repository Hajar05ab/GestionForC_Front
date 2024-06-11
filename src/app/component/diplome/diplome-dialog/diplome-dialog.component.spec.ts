import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomeDialogComponent } from './diplome-dialog.component';

describe('DiplomeDialogComponent', () => {
  let component: DiplomeDialogComponent;
  let fixture: ComponentFixture<DiplomeDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiplomeDialogComponent]
    });
    fixture = TestBed.createComponent(DiplomeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
