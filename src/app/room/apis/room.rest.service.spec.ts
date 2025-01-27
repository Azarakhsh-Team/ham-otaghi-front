import { TestBed } from '@angular/core/testing';

import { RoomRESTService } from './room.rest.service';

describe('RoomRESTService', () => {
  let service: RoomRESTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomRESTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
