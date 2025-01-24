import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomGuard } from './guards';
import { CurrentRoomPageComponent, SuggestedRoomsPageComponent } from './pages';

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
    component: SuggestedRoomsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomRoutingModule {}
