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
  loading: boolean = false;
  meeting = new Meeting;
  firestore: Firestore = inject(Firestore);
  db;


  constructor(public dialogRef: MatDialogRef<DialogAddMeetingComponent>) {
    this.db = collection(this.firestore, 'meetings');
  }

  saveMeeting() {
    addDoc(this.db, this.meeting.toJSON()).then(() => {
      console.log(this.meeting);
      this.dialogRef.close();

    })
  }

}
