import { TestBed } from '@angular/core/testing';

import { ForcontinueService } from './forcontinue.service';

describe('ForcontinueService', () => {
  let service: ForcontinueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForcontinueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
