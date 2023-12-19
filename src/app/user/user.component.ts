import { Component} from '@angular/core';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatDialog} from '@angular/material/dialog';
import { FirebaseServiceService } from '../firebase-service.service';





@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  constructor(private userService: FirebaseServiceService, public dialog: MatDialog) { 
  }

  getlist() {
    return this.userService.userList;
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}