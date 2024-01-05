import { Component} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FirebaseServiceService } from '../firebase-service.service';
import { Time } from '@angular/common';

@Component({
  selector: 'app-dialog-add-meeting',
  templateUrl: './dialog-add-meeting.component.html',
  styleUrls: ['./dialog-add-meeting.component.scss']
})
export class DialogAddMeetingComponent {
  loading:boolean = false;
  time!:any;
  date!: Date;
  meeting:string = '';

 
  constructor(private meetingService: FirebaseServiceService,public dialogRef: MatDialogRef<DialogAddMeetingComponent>) {
  }

  saveMeeting() {
    this.meetingService.meeting.meeting = this.meeting;
    this.meetingService.meeting.date = this.date.getTime();
    this.meetingService.meeting.time = this.time.getTime();
    this.meetingService.saveMeeting();
    this.dialogRef.close();
  }


}
