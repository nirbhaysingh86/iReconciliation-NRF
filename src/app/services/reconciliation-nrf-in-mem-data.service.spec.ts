import { TestBed } from '@angular/core/testing';

import { ReconciliationNrfInMemDataService } from './reconciliation-nrf-in-mem-data.service';

describe('ReconciliationNrfInMemDataService', () => {
  let service: ReconciliationNrfInMemDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReconciliationNrfInMemDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
