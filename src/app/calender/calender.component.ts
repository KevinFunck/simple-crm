import { Component } from '@angular/core';
import { DialogAddMeetingComponent } from '../dialog-add-meeting/dialog-add-meeting.component';
import { MatDialog } from '@angular/material/dialog';






@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],

 
})
export class CalenderComponent {

 
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogAddMeetingComponent);
  }
  
  

}
