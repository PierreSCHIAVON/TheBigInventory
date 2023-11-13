import { TestBed } from '@angular/core/testing';

import { WeaponTypeService } from './weapon-type.service';

describe('WeaponTypeService', () => {
  let service: WeaponTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaponTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
