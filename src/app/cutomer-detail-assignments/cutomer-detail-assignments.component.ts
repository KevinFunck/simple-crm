import { Component, inject } from '@angular/core';
import { Firestore, collection, doc, onSnapshot } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/models/customer.class';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { DialogEditCustomerComponent } from '../dialog-edit-customer/dialog-edit-customer.component';
import { DialogEditCustomerAddressComponent } from '../dialog-edit-customer-address/dialog-edit-customer-address.component';

@Component({
  selector: 'app-cutomer-detail-assignments',
  templateUrl: './cutomer-detail-assignments.component.html',
  styleUrls: ['./cutomer-detail-assignments.component.scss']
})
export class CutomerDetailAssignmentsComponent {
  firestore: Firestore = inject(Firestore);
  customerID: any;
  customer: Customer= new Customer();
  CustomerList;

  constructor(private route: ActivatedRoute, public dialog: MatDialog) {
    this.customerID = this.route.snapshot.paramMap.get('id');
    this.CustomerList = this.getUserFromFirebase();
  }

  ngOnDestroy() {
    this.CustomerList();
  }

  getSingleRef() {
    return doc(collection(this.firestore, 'customers'), this.customerID);
  }


  getUserFromFirebase() {
    return onSnapshot(this.getSingleRef(), (element) => {
      this.customer = new Customer(element.data());
      this.customer.id = this.customerID;
    });
  }

  ngOnInit(): void {

  }

  editUserMenu() {
    const dialog = this.dialog.open(DialogEditCustomerComponent)
    dialog.componentInstance.customer = new Customer(JSON.parse(JSON.stringify(this.customer)));
  }

  editAddress() {
    const dialog = this.dialog.open(DialogEditCustomerAddressComponent);
    dialog.componentInstance.customer = this.customer;
  }


}
