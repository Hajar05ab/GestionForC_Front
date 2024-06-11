import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiairesDialogComponent } from './beneficiaires-dialog.component';

describe('BeneficiairesDialogComponent', () => {
  let component: BeneficiairesDialogComponent;
  let fixture: ComponentFixture<BeneficiairesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeneficiairesDialogComponent]
    });
    fixture = TestBed.createComponent(BeneficiairesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
