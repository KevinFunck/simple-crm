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
  companyName:string = '';
  firstName:string = '';
  lastName:string = '';
  email:string = '';
  phone:string = '';
  street:string = '';
  zipCode:string = '';
  city:string = '';

 

  constructor(private customerService: FirebaseServiceService,public dialogRef: MatDialogRef<DialogAddCustomersComponent>) {  
  }


  saveUser() {
    this.customerService.customer.companyName = this.companyName;
    this.customerService.customer.firstName = this.firstName;
    this.customerService.customer.lastName = this.lastName;
    this.customerService.customer.email = this.email;
    this.customerService.customer.phone = this.phone;
    this.customerService.customer.street = this.street;
    this.customerService.customer.zipCode = this.zipCode;
    this.customerService.customer.city = this.city;
    this.customerService.saveUser();
    this.dialogRef.close(); 
  }

}
