import { TestBed } from '@angular/core/testing';

import { MeanServicesService } from './mean-services.service';

describe('MeanServicesService', () => {
  let service: MeanServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeanServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
