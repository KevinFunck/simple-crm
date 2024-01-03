import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-create-acoount',
  templateUrl: './dialog-create-acoount.component.html',
  styleUrls: ['./dialog-create-acoount.component.scss']
})
export class DialogCreateAcoountComponent {
  hide = true;

  constructor(public dialogRef: MatDialogRef<DialogCreateAcoountComponent>) {}

  backToLogin() {
    this.dialogRef.close(); 
  }

}
