import { TestBed } from '@angular/core/testing';

import { FinderRequestService } from './finder-request.service';

describe('FinderRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinderRequestService = TestBed.get(FinderRequestService);
    expect(service).toBeTruthy();
  });
});
