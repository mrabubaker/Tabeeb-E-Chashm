import { TestBed } from '@angular/core/testing';

import { SharingImageService } from './sharing-image.service';

describe('SharingImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharingImageService = TestBed.get(SharingImageService);
    expect(service).toBeTruthy();
  });
});
