import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRoomPageComponent } from './current-room-page.component';

describe('CurrentRoomPageComponent', () => {
  let component: CurrentRoomPageComponent;
  let fixture: ComponentFixture<CurrentRoomPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentRoomPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentRoomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
