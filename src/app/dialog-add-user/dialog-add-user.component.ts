import { Component} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FirebaseServiceService } from '../firebase-service.service';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
 

  constructor(public userService: FirebaseServiceService,public dialogRef: MatDialogRef<DialogAddUserComponent>) {  
  }

  saveUser() {
    this.userService.saveUser();
    this.dialogRef.close(); 
  }
}
