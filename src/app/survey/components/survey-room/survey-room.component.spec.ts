import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyRoomComponent } from './survey-room.component';

describe('SurveyRoomComponent', () => {
  let component: SurveyRoomComponent;
  let fixture: ComponentFixture<SurveyRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
