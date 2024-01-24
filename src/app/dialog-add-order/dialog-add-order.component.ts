import { Component } from '@angular/core';
import { FirebaseServiceService } from '../firebase-service.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dialog-add-order',
  templateUrl: './dialog-add-order.component.html',
  styleUrls: ['./dialog-add-order.component.scss']
})
export class DialogAddOrderComponent {
  loading:boolean = false
  startDate!:Date;
  endDate!:Date;
  assignmentName:string = '';
  assignmentInfo:string = '';
  salesVolume:number = 0;
 
  
  
 
 
 

  constructor(private orderService: FirebaseServiceService,public dialogRef: MatDialogRef<DialogAddOrderComponent>) {}




  saveOrder() {
    this.orderService.assignment.assignmentName = this.assignmentName;
    this.orderService.assignment.assignmentInfo = this.assignmentInfo;
    this.orderService.assignment.salesVolume = this.salesVolume;
    this.orderService.assignment.startDate = this.startDate.getTime();
    this.orderService.assignment.endDate = this.endDate.getTime();
    this.orderService.getAssignmentsByCustomerId;
    this.orderService.saveOrder();
    this.dialogRef.close(); 
  }



}
