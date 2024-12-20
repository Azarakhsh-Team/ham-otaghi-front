import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import {
  RoomComponent,
  RoommateComponent,
  SuggestedRoomsListComponent,
} from './components';
import { CurrentRoomPageComponent, SuggestedRoomsPageComponent } from './pages';
import { RoomRoutingModule } from './room-routing.module';

@NgModule({
  declarations: [
    RoomComponent,
    RoommateComponent,
    SuggestedRoomsListComponent,
    SuggestedRoomsPageComponent,
    CurrentRoomPageComponent,
  ],
  imports: [CommonModule, RoomRoutingModule, SharedModule],
  exports: [],
  providers: [],
})
export class RoomModule {}
