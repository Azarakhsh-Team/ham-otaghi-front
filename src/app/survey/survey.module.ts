import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SurveyItemComponent, SurveyListComponent } from './components';
import { SurveyPageComponent, SurveyQuestionsPageComponent } from './pages';
import { SurveyRoutingModule } from './survey-routing.module';

@NgModule({
  declarations: [
    SurveyPageComponent,
    SurveyQuestionsPageComponent,
    SurveyListComponent,
    SurveyItemComponent,
  ],
  imports: [CommonModule, SurveyRoutingModule, SharedModule],
  exports: [],
  providers: [],
})
export class SurveyModule {}
