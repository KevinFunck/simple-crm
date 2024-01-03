import { Component} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FirebaseServiceService } from '../firebase-service.service';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  loading:boolean = false;
  firstName:string = '';
  lastName:string = '';
  email:string = '';
  birthDate!:Date;
  street:string = '';
  zipCode:string = '';
  city:string = '';
 

  constructor(private userService: FirebaseServiceService,public dialogRef: MatDialogRef<DialogAddUserComponent>) {  
  }


  saveUser() {
    this.userService.user.firstName = this.firstName;
    this.userService.user.lastName = this.lastName;
    this.userService.user.email = this.email;
    this.userService.user.birthDate = this.birthDate;
    this.userService.user.street = this.street;
    this.userService.user.zipCode = this.zipCode;
    this.userService.user.city = this.city;
    this.userService.saveUser();
    this.dialogRef.close(); 
  }
}
