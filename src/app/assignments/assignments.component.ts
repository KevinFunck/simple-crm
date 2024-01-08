import { Component } from '@angular/core';
import { DialogAddOrderComponent } from '../dialog-add-order/dialog-add-order.component';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseServiceService } from '../firebase-service.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent {

  constructor(private assignmentService: FirebaseServiceService,public dialog: MatDialog) {}

  getlist() {
    return this.assignmentService.assginmentList;
  }

  openDialog() {
    this.dialog.open(DialogAddOrderComponent);

  }

}
