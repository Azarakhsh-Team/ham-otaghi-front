import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyQuestionsComponent } from './survey-questions.component';

describe('SurveyListComponent', () => {
  let component: SurveyQuestionsComponent;
  let fixture: ComponentFixture<SurveyQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SurveyQuestionsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
