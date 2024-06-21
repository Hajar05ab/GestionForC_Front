import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurDialogComponent } from './utilisateur-dialog.component';

describe('UtilisateurDialogComponent', () => {
  let component: UtilisateurDialogComponent;
  let fixture: ComponentFixture<UtilisateurDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtilisateurDialogComponent]
    });
    fixture = TestBed.createComponent(UtilisateurDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
