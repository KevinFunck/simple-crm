import { Component } from '@angular/core';
import { FirebaseServiceService } from '../firebase-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  noteNumber: number = this.noteService.noteList.length;
  userNumber: number = this.noteService.userList.length;
  mettingNumber: number = this.noteService.meetingList.length;
  greeting: string = this.getGreeting();


  constructor(private noteService: FirebaseServiceService) {

  }

  getGreeting() {
    const d = new Date();
    let time = d.getHours();
    if (time < 13 && time > 5) {
      return 'morning';
    } else if (time < 18 && time > 12) {
      return 'afternoon';
    } else if (time < 22 && time > 17) {
      return 'evening';
    } else {
      return 'night'
    }
  }







}
