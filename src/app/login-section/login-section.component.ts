import { Component } from '@angular/core';
import { DialogCreateAcoountComponent } from '../dialog-create-acoount/dialog-create-acoount.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login-section',
  templateUrl: './login-section.component.html',
  styleUrls: ['./login-section.component.scss']
})
export class LoginSectionComponent {
  hide = true;

  constructor( public dialog: MatDialog) {}

  guest() {
    document.getElementById('log')?.classList.add('d-none');
  }

  openDialog() {
    this.dialog.open(DialogCreateAcoountComponent);
  }

}
