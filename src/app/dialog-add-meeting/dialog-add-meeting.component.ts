import { Component, EventEmitter, Output, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FirebaseServiceService } from '../firebase-service.service';

@Component({
  selector: 'app-dialog-add-meeting',
  templateUrl: './dialog-add-meeting.component.html',
  styleUrls: ['./dialog-add-meeting.component.scss']
})
export class DialogAddMeetingComponent {
 
  constructor(public meetingService: FirebaseServiceService,public dialogRef: MatDialogRef<DialogAddMeetingComponent>) {
  }

 

  saveMeeting() {
    this.meetingService.saveMeeting();
    this.dialogRef.close();
  }


}
