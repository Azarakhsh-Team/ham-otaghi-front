import { Component } from '@angular/core';

@Component({
  selector: 'survey-item',
  templateUrl: './survey-item.component.html',
  styleUrls: ['./survey-item.component.css'],
})
export class SurveyItemComponent {
  public selectedIndex = -1;

  selectItem(index: number) {
    this.selectedIndex = index;
  }
}
