import { Component } from '@angular/core';
import { FirebaseServiceService } from '../firebase-service.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-customers',
  templateUrl: './dialog-add-customers.component.html',
  styleUrls: ['./dialog-add-customers.component.scss']
})
export class DialogAddCustomersComponent {
  loading:boolean = false;
  firstname:string = '';
 

  constructor(public userService: FirebaseServiceService,public dialogRef: MatDialogRef<DialogAddCustomersComponent>) {  
  }

  getlist() {
     this.userService.saveUser;
  }

  saveUser() {
    this.userService.saveUser();
    this.dialogRef.close(); 
  }

}
