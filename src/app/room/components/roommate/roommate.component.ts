import { Component, Input } from '@angular/core';
import { translateIndexToPersianText } from 'src/app/shared/util';

@Component({
  selector: 'roommate',
  templateUrl: './roommate.component.html',
  styleUrls: ['./roommate.component.css'],
})
export class RoommateComponent {
  @Input() index: number = 0;

  get persianIndexText(): string {
    return translateIndexToPersianText(this.index);
  }
}
