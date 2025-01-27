import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../api';
import { User } from '../models';

@Injectable({ providedIn: 'root' })
export class CurrentUserResolver implements Resolve<User.Model | null> {
  constructor(private readonly _userService: UserService) {}
  resolve(
    route: ActivatedRouteSnapshot
  ):
    | Observable<User.Model | null>
    | Promise<User.Model | null>
    | User.Model
    | null {
    return this._userService.resolveCurrentUser();
  }
}
