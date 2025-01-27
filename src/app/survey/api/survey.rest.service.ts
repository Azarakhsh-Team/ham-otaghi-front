import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractRESTService } from 'src/app/shared/api';
import { Survey } from '../models';

@Injectable({
  providedIn: 'root',
})
export class SurveyRESTService extends AbstractRESTService {
  public getQuestions(): Observable<Survey.Question[]> {
    const _url = `${this._serverUrl}/personality/questions/`;

    return this._http.get<Survey.Question[]>(_url, {
      headers: this.setAuthorizedHeaders(),
    });
  }

  public submitChoices(
    userId: number,
    data: Survey.SurveySubmissionDto
  ): Observable<any> {
    const _url = `${this._serverUrl}/personality/personality-tests/`;
    const _dto = {
      user: userId,
      answers: data,
    };

    return this._http.post<any>(_url, _dto, {
      headers: this.setAuthorizedHeaders(),
    });
  }
}
