import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcontinueDialogComponent } from './forcontinue-dialog.component';

describe('ForcontinueDialogComponent', () => {
  let component: ForcontinueDialogComponent;
  let fixture: ComponentFixture<ForcontinueDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForcontinueDialogComponent]
    });
    fixture = TestBed.createComponent(ForcontinueDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
