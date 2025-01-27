import { Injectable } from '@angular/core';
import { UserRESTService } from './user.rest.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public readonly currentUser$ = new BehaviorSubject<User.Model | null>(null);

  constructor(private _restService: UserRESTService) {}

  public resolveCurrentUser(): Observable<User.Model | null> {
    return this._restService.getCurrentUser().pipe(
      map((response) => response.data ?? null),
      tap({
        next: (currentUser) => {
          this.currentUser$.next(currentUser);
        },
      })
    );
  }
}
