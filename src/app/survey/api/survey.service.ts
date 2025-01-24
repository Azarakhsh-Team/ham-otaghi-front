import { Injectable } from '@angular/core';
import { SurveyRESTService } from './survey.rest.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  public readonly questions$ = new BehaviorSubject<any[]>([]);

  constructor(private readonly _restService: SurveyRESTService) {}

  public getQuestions(): void {
    this._restService.getQuestions().subscribe({
      next: (response) => {
        this.questions$.next(response);
      },
    });
  }
}
