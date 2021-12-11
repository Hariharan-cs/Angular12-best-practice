import { TestBed } from '@angular/core/testing';

import { MsalAuthGuard } from './msal-auth.guard';

describe('MsalAuthGuard', () => {
  let guard: MsalAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MsalAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
