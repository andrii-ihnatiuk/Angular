import { TestBed } from '@angular/core/testing';

import { PrefsGuard } from './prefs.guard';

describe('PrefsGuard', () => {
  let guard: PrefsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PrefsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
