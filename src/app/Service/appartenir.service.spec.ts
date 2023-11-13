import { TestBed } from '@angular/core/testing';

import { AppartenirService } from './appartenir.service';

describe('AppartenirService', () => {
  let service: AppartenirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppartenirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
