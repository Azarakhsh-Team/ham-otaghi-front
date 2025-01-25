import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyRoommateComponent } from './survey-roommate.component';

describe('SurveyRoommateComponent', () => {
  let component: SurveyRoommateComponent;
  let fixture: ComponentFixture<SurveyRoommateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyRoommateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyRoommateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
