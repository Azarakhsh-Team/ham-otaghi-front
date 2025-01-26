import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'survey-questions-page',
  templateUrl: './survey-questions-page.component.html',
  styleUrls: ['./survey-questions-page.component.css'],
})
export class SurveyQuestionsPageComponent {
  constructor(private readonly _router: Router) {}

  handleSubmit(): void {
    this._router.navigateByUrl('/profile/room/suggested');
  }
}
