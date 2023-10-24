import { TestBed } from '@angular/core/testing';

import { DieterServiceService } from './dieter-service.service';

describe('DieterServiceService', () => {
  let service: DieterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DieterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
