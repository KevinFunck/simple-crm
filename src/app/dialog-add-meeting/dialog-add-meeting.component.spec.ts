import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddMeetingComponent } from './dialog-add-meeting.component';

describe('DialogAddMeetingComponent', () => {
  let component: DialogAddMeetingComponent;
  let fixture: ComponentFixture<DialogAddMeetingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogAddMeetingComponent]
    });
    fixture = TestBed.createComponent(DialogAddMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
