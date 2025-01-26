import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  SurveyPageComponent,
  SurveyQuestionsPageComponent,
  SurveyRoomsPageComponent,
} from './pages';

const routes: Routes = [
  {
    path: '',
    component: SurveyPageComponent,
  },
  {
    path: 'questions',
    component: SurveyQuestionsPageComponent,
  },
  {
    path: 'rooms',
    component: SurveyRoomsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveyRoutingModule {}
