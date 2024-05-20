import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesInfoComponent } from './tables-info.component';

describe('TablesInfoComponent', () => {
  let component: TablesInfoComponent;
  let fixture: ComponentFixture<TablesInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablesInfoComponent]
    });
    fixture = TestBed.createComponent(TablesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
