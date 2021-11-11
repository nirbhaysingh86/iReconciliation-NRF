import { TestBed } from '@angular/core/testing';

import { ReconciliationNrfService } from './reconciliation-nrf.service';

describe('AirlineService', () => {
  let service: ReconciliationNrfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReconciliationNrfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
