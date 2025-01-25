import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'room',
  },
  {
    path: 'room',
    loadChildren: () => import('../room/room.module').then((m) => m.RoomModule),
  },
  {
    path: 'survey',
    loadChildren: () =>
      import('../survey/survey.module').then((m) => m.SurveyModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
