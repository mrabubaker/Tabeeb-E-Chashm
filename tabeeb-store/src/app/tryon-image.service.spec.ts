import { TestBed } from '@angular/core/testing';

import { TryonImageService } from './tryon-image.service';

describe('TryonImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TryonImageService = TestBed.get(TryonImageService);
    expect(service).toBeTruthy();
  });
});
