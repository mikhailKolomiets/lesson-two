import { TestBed } from '@angular/core/testing';

import { NbuRatesService } from './nbu-rates.service';

describe('NbuRatesService', () => {
  let service: NbuRatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NbuRatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
