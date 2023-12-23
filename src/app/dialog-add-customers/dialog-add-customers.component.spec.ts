import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddCustomersComponent } from './dialog-add-customers.component';

describe('DialogAddCustomersComponent', () => {
  let component: DialogAddCustomersComponent;
  let fixture: ComponentFixture<DialogAddCustomersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogAddCustomersComponent]
    });
    fixture = TestBed.createComponent(DialogAddCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
