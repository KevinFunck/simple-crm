import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, doc, updateDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-customer',
  templateUrl: './dialog-edit-customer.component.html',
  styleUrls: ['./dialog-edit-customer.component.scss']
})
export class DialogEditCustomerComponent implements OnInit  {
  customer:any;
  loading:boolean = false;
  firestore: Firestore = inject(Firestore);

  constructor(public dialogRef: MatDialogRef<DialogEditCustomerComponent>){
    
  }
  ngOnInit(): void {
   
  }



  async saveUser(){
    this.loading = true;
    await updateDoc(this.getSingleRef(), JSON.parse(JSON.stringify(this.customer))).then(() =>{this.loading = false; this.dialogRef.close()});
  }

  getSingleRef(){
    console.log(this.customer.id);
    return doc(collection(this.firestore, 'customers'),this.customer.id);
  }

}
