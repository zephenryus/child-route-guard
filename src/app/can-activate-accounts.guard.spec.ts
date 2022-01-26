import { TestBed } from '@angular/core/testing';

import { CanActivateAccountsGuard } from './can-activate-accounts.guard';

describe('CanActivateAccountsGuard', () => {
  let guard: CanActivateAccountsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateAccountsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
