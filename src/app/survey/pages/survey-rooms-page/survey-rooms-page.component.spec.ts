import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyRoomsPageComponent } from './survey-rooms-page.component';

describe('SurveyRoomsPageComponent', () => {
  let component: SurveyRoomsPageComponent;
  let fixture: ComponentFixture<SurveyRoomsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyRoomsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyRoomsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
