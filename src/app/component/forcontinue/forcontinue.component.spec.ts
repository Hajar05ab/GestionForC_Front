import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcontinueComponent } from './forcontinue.component';

describe('ForcontinueComponent', () => {
  let component: ForcontinueComponent;
  let fixture: ComponentFixture<ForcontinueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForcontinueComponent]
    });
    fixture = TestBed.createComponent(ForcontinueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
