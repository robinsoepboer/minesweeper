import { TestBed, inject } from '@angular/core/testing';

import { MinefieldService } from './minefield.service';

describe('MinefieldService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MinefieldService]
    });
  });

  it('should be created', inject([MinefieldService], (service: MinefieldService) => {
    expect(service).toBeTruthy();
  }));
});
