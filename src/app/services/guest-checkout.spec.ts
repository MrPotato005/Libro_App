import { TestBed } from '@angular/core/testing';

import { GuestCheckoutServices } from './guest-checkout';

describe('GuestCheckout', () => {
  let service: GuestCheckoutServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestCheckoutServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
