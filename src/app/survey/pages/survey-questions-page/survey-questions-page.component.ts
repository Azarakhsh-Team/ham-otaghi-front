import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from '../../api';
import { Observable } from 'rxjs';

@Component({
  selector: 'survey-questions-page',
  templateUrl: './survey-questions-page.component.html',
  styleUrls: ['./survey-questions-page.component.css'],
})
export class SurveyQuestionsPageComponent {
  constructor(
    private readonly _router: Router,
    private readonly _surveyService: SurveyService
  ) {}

  get areAllQuestionsAnswered$(): Observable<boolean> {
    return this._surveyService.areAllQuestionsAnswered$;
  }

  handleSubmit(): void {
    this._surveyService.submitChoices();
  }
}
