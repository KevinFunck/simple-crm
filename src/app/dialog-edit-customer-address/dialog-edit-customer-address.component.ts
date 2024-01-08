import { Component, inject } from '@angular/core';
import { Firestore, collection, doc, updateDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-customer-address',
  templateUrl: './dialog-edit-customer-address.component.html',
  styleUrls: ['./dialog-edit-customer-address.component.scss']
})
export class DialogEditCustomerAddressComponent {
  customer: any;
  loading: boolean = false;
  firestore: Firestore = inject(Firestore);

  constructor(public dialogRef: MatDialogRef<DialogEditCustomerAddressComponent>){}

  async saveUser(){
    this.loading = true;
    await updateDoc(this.getSingleRef(), JSON.parse(JSON.stringify(this.customer))).then(() =>{this.loading = false; this.dialogRef.close()});
  
  }

  getSingleRef(){
    return doc(collection(this.firestore, 'customers'),this.customer.id);
  }

}
