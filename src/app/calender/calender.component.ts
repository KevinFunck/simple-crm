import { Component, inject } from '@angular/core';
import { DialogAddMeetingComponent } from '../dialog-add-meeting/dialog-add-meeting.component';
import { MatDialog } from '@angular/material/dialog';
import { Firestore } from '@angular/fire/firestore';

import { FirebaseServiceService } from '../firebase-service.service';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],


})
export class CalenderComponent {
date: any;



  constructor(private meetingService: FirebaseServiceService, public dialog: MatDialog) {
  }

  getlist() {
    return this.meetingService.meetingList;
  }

  openDialog() {
    this.dialog.open(DialogAddMeetingComponent);
  }



}
