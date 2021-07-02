import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomPlayComponent } from './room-play.component';

describe('RoomPlayComponent', () => {
  let component: RoomPlayComponent;
  let fixture: ComponentFixture<RoomPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomPlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
