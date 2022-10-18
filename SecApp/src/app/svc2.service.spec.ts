import { TestBed } from '@angular/core/testing';

import { Svc2Service } from './svc2.service';

describe('Svc2Service', () => {
  let service: Svc2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Svc2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
