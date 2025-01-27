import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Room } from '../models';
import { RoomService } from '../apis';

@Injectable({ providedIn: 'root' })
export class SuggestedRoomsResolver implements Resolve<Room.Model[]> {
  constructor(private readonly _roomService: RoomService) {}
  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<Room.Model[]> | Promise<Room.Model[]> | Room.Model[] {
    return this._roomService.resolveSuggestedRooms();
  }
}
