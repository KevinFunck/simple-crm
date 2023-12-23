import { Time } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, doc, onSnapshot, updateDoc } from '@angular/fire/firestore';
import { Meeting } from 'src/models/meeting.class';
import { Note } from 'src/models/notes.class';
import { User } from 'src/models/user.class';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
  loading:boolean = false;
  firestore: Firestore = inject(Firestore);
  user: User = new User();
  note: Note = new Note();
  meeting: Meeting = new Meeting();
  userList: any = [];
  noteList: any = [];
  meetingList: any = [];
  birthDate!: Date;
  meetingDate!: Date;
  meetingTime!: Date;
  unsubList;
  db;
 


 
  constructor() {
    this.unsubList = this.subUsersList(); 
    this.unsubList = this.subNotesList();
    this.unsubList = this.subMeetingList();
    this.db = collection(this.firestore, 'notes');
    this.db = collection(this.firestore, 'users');
    this.db = collection(this.firestore, 'meetings');
  }

  subUsersList(){
    return onSnapshot(this.getUserRef(), (list) =>{
      this.userList = [];
      list.forEach(element => {
        this.userList.push(this.setUserObject(element.data(), element.id));
      });
      if(this.userList.length >= 2){
      this.userList.sort((a:any, b:any) => {
        if (a.firstName < b.firstName) {
          return -1;
        }
        if (a.firstName > b.firstName) {
          return 1;
        }
        return 0;
      });
    }
    })
  }

  

  subNotesList(){
    return onSnapshot(this.getNoteRef(), (list) =>{
      this.noteList = [];
      list.forEach(element => {
        this.noteList.push(this.setNoteObject(element.data(), element.id));
        console.log(this.note);
      });
      if(this.noteList.length >= 2){
      this.noteList.sort((a:any, b:any) => {
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

  subMeetingList(){
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
      time: obj.time || ""  
    }
  }

  setNoteObject(obj:any, id:string) {
    return {
      id: id || "",
      title: obj.title || "",
      description : obj.description  || "",
    }
  }

  setUserObject(obj:any, id:string) {
    return {
      id: id || "",
      firstName: obj.firstName || "",
      lastName: obj.lastName || "",
      birthDate: obj.birthDate || "",
      street: obj.street || "",
      zipCode: obj.zipCode || "",
      city: obj.city || "",
      email: obj.email || "",
    }
  }

  saveMeeting() {
    this.meeting.date = this.meetingDate.getTime();
    this.meeting.time = this.meetingTime.getTime();
    addDoc(this.db, this.meeting.toJSON()).then(() => {
    })
  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    addDoc(this.db, this.user.toJSON()).then(() => {   
    })
  }

  saveNote() {
    addDoc(this.db, this.note.toJSON()).then(() => {
      console.log(this.note.id);
      
    })
  }



  ngOnDestroy(){
    this.unsubList();
  }

  getNoteRef(){
    return collection(this.firestore, 'notes');
   }
  
  getUserRef(){
   return collection(this.firestore, 'users');
  }

   getMeetingRef(){
   return collection(this.firestore, 'meetings');
  }

 
}
