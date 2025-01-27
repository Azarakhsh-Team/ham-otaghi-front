import { Component } from '@angular/core';
import { SurveyService } from '../../api';
import { Observable } from 'rxjs';
import { Survey } from '../../models';

@Component({
  selector: 'survey-questions',
  templateUrl: './survey-questions.component.html',
  styleUrls: ['./survey-questions.component.css'],
})
export class SurveyQuestionsComponent {
  constructor(private readonly _surveyService: SurveyService) {}

  get questions$(): Observable<Survey.Question[]> {
    return this._surveyService.questions$.asObservable();
  }
}
