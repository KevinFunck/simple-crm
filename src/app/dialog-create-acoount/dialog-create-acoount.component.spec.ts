import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateAcoountComponent } from './dialog-create-acoount.component';

describe('DialogCreateAcoountComponent', () => {
  let component: DialogCreateAcoountComponent;
  let fixture: ComponentFixture<DialogCreateAcoountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogCreateAcoountComponent]
    });
    fixture = TestBed.createComponent(DialogCreateAcoountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
