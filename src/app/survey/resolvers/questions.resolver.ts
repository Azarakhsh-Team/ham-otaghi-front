import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Survey } from '../models';
import { SurveyService } from '../api';

@Injectable({ providedIn: 'root' })
export class QuestionsResolver implements Resolve<Survey.Question[]> {
  constructor(private readonly _surveyService: SurveyService) {}
  resolve(
    route: ActivatedRouteSnapshot
  ):
    | Observable<Survey.Question[]>
    | Promise<Survey.Question[]>
    | Survey.Question[] {
    return this._surveyService.resolveQuestions();
  }
}
