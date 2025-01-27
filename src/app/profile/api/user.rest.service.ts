import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractRESTService } from 'src/app/shared/api';
import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class UserRESTService extends AbstractRESTService {
  public getCurrentUser(): Observable<User.GetUserResponse> {
    const _url = `${this._serverUrl}/accounts/user/token/`;

    return this._http.get<User.GetUserResponse>(_url, {
      headers: this.setAuthorizedHeaders(),
    });
  }
}
