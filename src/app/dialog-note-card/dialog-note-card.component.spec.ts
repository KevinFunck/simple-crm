import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNoteCardComponent } from './dialog-note-card.component';

describe('DialogNoteCardComponent', () => {
  let component: DialogNoteCardComponent;
  let fixture: ComponentFixture<DialogNoteCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogNoteCardComponent]
    });
    fixture = TestBed.createComponent(DialogNoteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
