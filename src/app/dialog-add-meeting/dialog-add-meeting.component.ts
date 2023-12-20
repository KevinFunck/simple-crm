import { Component, inject } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Meeting } from 'src/models/meeting.class';

@Component({
  selector: 'app-dialog-add-meeting',
  templateUrl: './dialog-add-meeting.component.html',
  styleUrls: ['./dialog-add-meeting.component.scss']
})
export class DialogAddMeetingComponent {
  meeting = new Meeting();
  meetingDate!: Date;
  firestore: Firestore = inject(Firestore);
  db;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogAddMeetingComponent>) {
    this.db = collection(this.firestore, 'meetings');
  }

  saveMeeting() {
    this.meeting.date = this.meetingDate.getTime();
    this.loading =true;
    
    addDoc(this.db, this.meeting.toJSON()).then(() => {
      this.loading = false;
      this.dialogRef.close();
    })
  }

}
