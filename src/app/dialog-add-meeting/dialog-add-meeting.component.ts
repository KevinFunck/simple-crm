import { Component} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FirebaseServiceService } from '../firebase-service.service';


@Component({
  selector: 'app-dialog-add-meeting',
  templateUrl: './dialog-add-meeting.component.html',
  styleUrls: ['./dialog-add-meeting.component.scss']
})
export class DialogAddMeetingComponent {
  loading:boolean = false;
  MeetingTime:any;
  MeetingDate:any;
  meeting:string = '';

 
  constructor(private meetingService: FirebaseServiceService,public dialogRef: MatDialogRef<DialogAddMeetingComponent>) {
  }

  saveMeeting() {
    this.meetingService.meeting.meeting = this.meeting;
    this.meetingService.meeting.MeetingDate = this.MeetingDate.getTime();
    this.meetingService.meeting.MeetingTime = this.MeetingTime;
    this.meetingService.saveMeeting();
    this.dialogRef.close();
  }


}
