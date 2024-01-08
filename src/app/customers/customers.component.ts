import { Component } from '@angular/core';
import { FirebaseServiceService } from '../firebase-service.service';
import { DialogAddCustomersComponent } from '../dialog-add-customers/dialog-add-customers.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  constructor(private customerService: FirebaseServiceService, public dialog: MatDialog) { 
  }

  getlist() {
    return this.customerService.customerList;
  }

  openDialog() {
    this.dialog.open(DialogAddCustomersComponent);
  }

}
