import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyRoomsListComponent } from './survey-rooms-list.component';

describe('SurveyRoomsListComponent', () => {
  let component: SurveyRoomsListComponent;
  let fixture: ComponentFixture<SurveyRoomsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyRoomsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyRoomsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
