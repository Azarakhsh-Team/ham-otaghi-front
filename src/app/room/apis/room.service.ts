import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Room } from '../models';
import { RoomRESTService } from './room.rest.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  public readonly suggestedRooms$ = new BehaviorSubject<Room.Model[]>([]);

  constructor(private readonly _restService: RoomRESTService) {}

  public resolveSuggestedRooms(): Observable<Room.Model[]> {
    return this._restService.getSuggestedRooms().pipe(
      tap({
        next: (response) => {
          this.suggestedRooms$.next(response);
        },
      })
    );
  }
}
