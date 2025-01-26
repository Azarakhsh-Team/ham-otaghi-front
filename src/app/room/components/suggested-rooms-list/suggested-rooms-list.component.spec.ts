import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedRoomsListComponent } from './suggested-rooms-list.component';

describe('SuggestedRoomsListComponent', () => {
  let component: SuggestedRoomsListComponent;
  let fixture: ComponentFixture<SuggestedRoomsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuggestedRoomsListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedRoomsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
