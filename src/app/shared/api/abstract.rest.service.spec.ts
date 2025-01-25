import { TestBed } from '@angular/core/testing';

import { AbstractRESTService } from './abstract.rest.service';

describe('AbstractRESTService', () => {
  let service: AbstractRESTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbstractRESTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
