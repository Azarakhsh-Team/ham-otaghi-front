import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomGuard } from './guards';
import { CurrentRoomPageComponent, SuggestedRoomsPageComponent } from './pages';
import { SuggestedRoomsResolver } from './resolvers';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'current',
  },
  {
    path: 'current',
    component: CurrentRoomPageComponent,
    canActivate: [RoomGuard],
  },
  {
    path: 'suggested',
    resolve: {
      suggestedRooms: SuggestedRoomsResolver,
    },
    component: SuggestedRoomsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomRoutingModule {}
