import { Component, inject } from '@angular/core';
import { DialogAddMeetingComponent } from '../dialog-add-meeting/dialog-add-meeting.component';
import { MatDialog } from '@angular/material/dialog';
import { Firestore, collection, onSnapshot } from '@angular/fire/firestore';
import { Meeting } from 'src/models/meeting.class';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],

 
})
export class CalenderComponent {
  firestore: Firestore = inject(Firestore);
  meeting: Meeting = new Meeting();
  meetingList: any = [];
  unsubList;
  selectedDate: any;
 ate: any;
 


  constructor(public dialog: MatDialog) {
    this.unsubList = this.subUsersList(); 
  }

  openDialogNote() {
    this.dialog.open(DialogAddMeetingComponent);
  }



  subUsersList(){
    return onSnapshot(this.getMeetingRef(), (list) =>{
      this.meetingList = [];
      list.forEach(element => {
        this.meetingList.push(this.setMeetingObject(element.data(), element.id));
        console.log(this.meeting);
      });
      if(this.meetingList.length >= 2){
      this.meetingList.sort((a:any, b:any) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    }
    })
  }

  setMeetingObject(obj:any, id:string) {
    return {
      id: id || "",
      meeting: obj.meeting || "",
      date : obj.date  || "",   
    }
  }

  ngOnDestroy(){
    this.unsubList();
  }
  
  getMeetingRef(){
   return collection(this.firestore, 'meetings');
  }

  openDialog() {
    this.dialog.open(DialogAddMeetingComponent);
  }
  
  

}
