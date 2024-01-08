import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomerDetailAssignmentsComponent } from './cutomer-detail-assignments.component';

describe('CutomerDetailAssignmentsComponent', () => {
  let component: CutomerDetailAssignmentsComponent;
  let fixture: ComponentFixture<CutomerDetailAssignmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CutomerDetailAssignmentsComponent]
    });
    fixture = TestBed.createComponent(CutomerDetailAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
