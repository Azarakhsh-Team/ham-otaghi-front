import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractRESTService } from 'src/app/shared/api';

@Injectable({
  providedIn: 'root',
})
export class SurveyRESTService extends AbstractRESTService {
  public getQuestions(): Observable<any[]> {
    const _url = `${this._serverUrl}/personality/questions/`;

    return this._http.get<any[]>(_url, {
      headers: this.setAuthorizedHeaders(),
    });
  }
}
