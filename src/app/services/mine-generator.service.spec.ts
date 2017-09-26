import { TestBed, inject } from '@angular/core/testing';

import { MineGeneratorService } from './mine-generator.service';

describe('MineGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MineGeneratorService]
    });
  });

  it('should be created', inject([MineGeneratorService], (service: MineGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
