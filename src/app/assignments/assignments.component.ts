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
  selectedColor: any;
  sale:Number = 0;
 

  


  constructor(private assignmentService: FirebaseServiceService, public dialog: MatDialog) {
    this.calculater();
  }

  calculater() {
    for(let Assignment of this.getlist()) {
      this.sale += Assignment.salesVolume;
    }
  }

  getlist() {
    return this.assignmentService.assginmentList;
  }

  openDialog() {
    this.dialog.open(DialogAddOrderComponent);

  }

  changeTheStatusToProgress() {
    let progress = document.getElementById('progress');

    if (progress) {
      this.selectedColor = 'rgb(137, 242, 104)';
      
    }
  }

  changeTheStatusToFinish() {
    let finish = document.getElementById('finish');

    if (finish) {
      this.selectedColor = 'rgb(135, 232, 226)';
    }

  }

  changeTheStatusToCreated() {
    let created = document.getElementById('created');

    if (created) {
      this.selectedColor = 'white';
    }
  }

}
