import { TestBed } from '@angular/core/testing';

import { BeersResolver } from './beers.resolver';

describe('BeersResolver', () => {
  let resolver: BeersResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(BeersResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
