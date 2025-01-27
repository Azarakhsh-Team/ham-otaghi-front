import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractRESTService } from 'src/app/shared/api';
import { Room } from '../models';

@Injectable({
  providedIn: 'root',
})
export class RoomRESTService extends AbstractRESTService {
  public getSuggestedRooms(): Observable<Room.Model[]> {
    const _url = `${this._serverUrl}/personality/rooms/recommended/`;

    return this._http.get<Room.Model[]>(_url, {
      headers: this.setAuthorizedHeaders(),
    });
  }
}
