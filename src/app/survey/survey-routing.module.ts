import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyPageComponent, SurveyQuestionsPageComponent } from './pages';
import { QuestionsResolver } from './resolvers';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'start',
  },
  {
    path: 'start',
    component: SurveyPageComponent,
  },
  {
    path: 'questions',
    resolve: [QuestionsResolver],
    component: SurveyQuestionsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveyRoutingModule {}
