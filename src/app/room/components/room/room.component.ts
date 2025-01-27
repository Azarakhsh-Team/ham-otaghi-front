import { Component, Input } from '@angular/core';
import { translateIndexToPersianText } from 'src/app/shared/util';

@Component({
  selector: 'room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
})
export class RoomComponent {
  @Input() index: number = 0;

  get persianIndexText(): string {
    return translateIndexToPersianText(this.index);
  }
}
