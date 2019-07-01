import { TestBed } from '@angular/core/testing';

import { VinoService } from './vino.service';

describe('VinoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VinoService = TestBed.get(VinoService);
    expect(service).toBeTruthy();
  });
});
