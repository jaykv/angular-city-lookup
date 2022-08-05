import { TestBed } from '@angular/core/testing';

import { LocationLookupService } from './location-lookup.service';

describe('LocationLookupService', () => {
  let service: LocationLookupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationLookupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
