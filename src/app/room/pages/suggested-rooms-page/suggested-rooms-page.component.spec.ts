import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedRoomsPageComponent } from './suggested-rooms-page.component';

describe('SuggestedRoomsPageComponent', () => {
  let component: SuggestedRoomsPageComponent;
  let fixture: ComponentFixture<SuggestedRoomsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuggestedRoomsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedRoomsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
