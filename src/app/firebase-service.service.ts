
import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, doc, onSnapshot, updateDoc } from '@angular/fire/firestore';
import { Customer } from 'src/models/customer.class';
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
  customer:Customer= new Customer();
  userList: any = [];
  noteList: any = [];
  meetingList: any = [];
  customerlist: any = [];
  birthDate!: Date;
  meetingDate!: Date;
  meetingTime!: Date;
  unsubList;
  unsubListU;
  unsubListM;
  unsubListC;
  db;
  dbu;
  dbm;
  dbc;

 
  constructor() {
    this.unsubListU = this.subUsersList(); 
    this.unsubList = this.subNotesList();
    this.unsubListM = this.subMeetingList();
    this.unsubListC = this.subCustomersList();
    this.db = collection(this.firestore, 'notes');
    this.dbu = collection(this.firestore, 'users');
    this.dbm = collection(this.firestore, 'meetings');
    this.dbc = collection(this.firestore, 'customers');
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
  //The subMeetingList function subscribes to real-time updates of a meeting list from 
  //a Firestore database, updates the local this.meetingList with the received data, and sorts it alphabetically by title if the list contains two or more elements.
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

  subCustomersList(){
    return onSnapshot(this.getCustomerRef(), (list) =>{
      this.customerlist = [];
      list.forEach(element => {
        this.customerlist.push(this.setCustomerObject(element.data(), element.id));
        console.log(this.customer);
      });
      if(this.customerlist.length >= 2){
      this.customerlist.sort((a:any, b:any) => {
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

  setCustomerObject(obj:any, id:string) {
    return {
      id: id || "",
      companyName: obj.companyName || "",
      firstName: obj.firstName || "",
      lastName: obj.lastName || "",
      email: obj.email || "",
      phone: obj.phone || "",
      street: obj.street || "",
      zipCode: obj.zipCode || "",
      city: obj.city || "",
    }
  }

  saveMeeting() {
    addDoc(this.dbm, this.meeting.toJSON())
  }

  saveUser() {
    addDoc(this.dbu, this.user.toJSON())   
  }

  saveCustomer() {
    addDoc(this.dbc, this.customer.toJSON())   
  }

  saveNote() {
    addDoc(this.db, this.note.toJSON()) 
  }

  ngOnDestroy(){
    this.unsubList();
    this.unsubListM();
    this.unsubListU();
    this.unsubListC();
  }

  getNoteRef(){
    return collection(this.firestore, 'notes');
   }

   getCustomerRef(){
    return collection(this.firestore, 'customers');
   }
  
  getUserRef(){
   return collection(this.firestore, 'users');
  }

   getMeetingRef(){
   return collection(this.firestore, 'meetings');
  }

 
}
