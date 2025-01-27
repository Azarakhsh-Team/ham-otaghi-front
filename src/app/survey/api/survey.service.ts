import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserService } from 'src/app/profile/api';
import { sortSurvey } from '../helpers';
import { Survey } from '../models';
import { SurveyRESTService } from './survey.rest.service';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  public readonly questions$ = new BehaviorSubject<Survey.Question[]>([]);
  public readonly submissionDto$ =
    new BehaviorSubject<Survey.SurveySubmissionDto>({});
  public readonly areAllQuestionsAnswered$ = combineLatest([
    this.questions$,
    this.submissionDto$,
  ]).pipe(
    map(([questions, submissionDto]) => {
      return questions.every((question) => {
        return submissionDto[question?.id?.toString()] !== undefined;
      });
    })
  );

  constructor(
    private readonly _restService: SurveyRESTService,
    private readonly _userService: UserService,
    private readonly _router: Router
  ) {}

  public storeSurvey(questions: Survey.Question[]): void {
    this.questions$.next(sortSurvey(questions));
  }

  public getQuestions(): void {
    this._restService.getQuestions().subscribe({
      next: (response) => {
        this.storeSurvey(response);
      },
    });
  }

  public resolveQuestions(): Observable<Survey.Question[]> {
    return this._restService.getQuestions().pipe(
      tap({
        next: (response) => {
          this.storeSurvey(response);
        },
      })
    );
  }

  public handleChoiceSelected(questionId: number, choiceId: number) {
    const _submissionDto = this.submissionDto$.getValue();

    _submissionDto[questionId.toString()] = choiceId > 0 ? choiceId : undefined;

    this.submissionDto$.next(_submissionDto);
  }

  public submitChoices(): void {
    const _userId = this._userService.currentUser$.getValue()?.id;
    if (!_userId) {
      return;
    }

    this._restService
      .submitChoices(_userId, this.submissionDto$.getValue())
      .subscribe(() => {
        setTimeout(
          () => this._router.navigateByUrl('/profile/room/suggested'),
          1
        );
      });
  }
}
