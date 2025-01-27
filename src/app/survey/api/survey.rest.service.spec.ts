import { TestBed } from '@angular/core/testing';

import { SurveyRESTService } from './survey.rest.service';

describe('SurveyRESTService', () => {
  let service: SurveyRESTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyRESTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
