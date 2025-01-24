import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from '../../api';

@Component({
  selector: 'survey-questions-page',
  templateUrl: './survey-questions-page.component.html',
  styleUrls: ['./survey-questions-page.component.css'],
})
export class SurveyQuestionsPageComponent implements OnInit {
  constructor(
    private readonly _surveyService: SurveyService,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this._surveyService.getQuestions();
  }

  handleSubmit(): void {
    this._router.navigateByUrl('/profile/room/suggested');
  }
}
