import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Survey } from '../../models';
import { SurveyService } from '../../api';

@Component({
  selector: 'survey-item',
  templateUrl: './survey-item.component.html',
  styleUrls: ['./survey-item.component.css'],
})
export class SurveyItemComponent implements OnInit {
  @Input() data: Survey.Question | null = null;

  public selectedChoiceId = -1;

  constructor(private readonly _surveyService: SurveyService) {}

  ngOnInit(): void {
    if (this.data) {
      this.selectedChoiceId =
        this._surveyService.submissionDto$.getValue()[
          this.data.id.toString()
        ] ?? -1;
    }
  }

  selectItem(id: number) {
    this.selectedChoiceId = this.selectedChoiceId === id ? -1 : id;
    this._surveyService.handleChoiceSelected(
      this.data.id,
      this.selectedChoiceId
    );
  }
}
