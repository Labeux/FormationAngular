import { TestBed } from '@angular/core/testing';

import { WookieService } from './wookie.service';

describe('WookieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WookieService = TestBed.get(WookieService);
    expect(service).toBeTruthy();
  });
});
