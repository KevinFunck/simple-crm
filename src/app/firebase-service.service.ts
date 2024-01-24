
import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, deleteDoc, doc, onSnapshot, query, updateDoc, where } from '@angular/fire/firestore';
import { Assignment } from 'src/models/assignment.class';
import { Customer } from 'src/models/customer.class';
import { Meeting } from 'src/models/meeting.class';
import { Note } from 'src/models/notes.class';
import { User } from 'src/models/user.class';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
  loading: boolean = false;
  firestore: Firestore = inject(Firestore);
  user: User = new User();
  note: Note = new Note();
  meeting: Meeting = new Meeting();
  customer: Customer = new Customer();
  assignment: Assignment = new Assignment();
  assginmentList: any = [];
  userList: any = [];
  noteList: any = [];
  meetingList: any = [];
  customerList: any = [];
  unsubList;
  unsubListU;
  unsubListM;
  unsubListC;
  unsubListA;
  db;
  dbu;
  dbm;
  dbc;
  dba;


  constructor() {
    this.unsubListU = this.subUsersList();
    this.unsubList = this.subNotesList();
    this.unsubListM = this.subMeetingList();
    this.unsubListC = this.subCustomersList();
    this.unsubListA = this.subAssginmentList();
    this.db = collection(this.firestore, 'notes');
    this.dbu = collection(this.firestore, 'users');
    this.dbm = collection(this.firestore, 'meetings');
    this.dbc = collection(this.firestore, 'customers');
    this.dba = collection(this.firestore, 'assignment');
  }

  subUsersList() {
    return onSnapshot(this.getUserRef(), (list) => {
      this.userList = [];
      list.forEach(element => {
        this.userList.push(this.setUserObject(element.data(), element.id));
      });
      if (this.userList.length >= 2) {
        this.userList.sort((a: any, b: any) => {
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



  subNotesList() {
    return onSnapshot(this.getNoteRef(), (list) => {
      this.noteList = [];
      list.forEach(element => {
        this.noteList.push(this.setNoteObject(element.data(), element.id));

      });
      if (this.noteList.length >= 2) {
        this.noteList.sort((a: any, b: any) => {
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

  subAssginmentList() {
    return onSnapshot(this.getAssignmentRef(), (list) => {
      this.assginmentList = [];
      list.forEach(element => {
        this.assginmentList.push(this.setAssignmentObject(element.data(), element.id));

      });
      if (this.assginmentList.length >= 2) {
        this.assginmentList.sort((a: any, b: any) => {
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
  subMeetingList() {
    return onSnapshot(this.getMeetingRef(), (list) => {
      this.meetingList = [];
      list.forEach(element => {
        this.meetingList.push(this.setMeetingObject(element.data(), element.id));
        console.log(this.meeting);
      });
      if (this.meetingList.length >= 2) {
        this.meetingList.sort((a: any, b: any) => {
          if (a.MettingDate < b.MeetingDate) {
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

  subCustomersList() {
    return onSnapshot(this.getCustomerRef(), (list) => {
      this.customerList = [];
      list.forEach(element => {
        this.customerList.push(this.setCustomerObject(element.data(), element.id));
      });
      if (this.customerList.length >= 2) {
        this.customerList.sort((a: any, b: any) => {
          if (a.companyName < b.companyName) {
            return -1;
          }
          if (a.companyName > b.companyName) {
            return 1;
          }
          return 0;
        });
      }
    })
  }

  setMeetingObject(obj: any, id: string) {
    return {
      id: id || "",
      meeting: obj.meeting || "",
      MeetingDate: obj.MeetingDate || "",
      MeetingTime: obj.MeetingTime || ""
    }
  }

  setNoteObject(obj: any, id: string) {
    return {
      id: id || "",
      title: obj.title || "",
      description: obj.description || "",
    }
  }

  setUserObject(obj: any, id: string) {
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

  setCustomerObject(obj: any, id: string) {
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

  setAssignmentObject(obj: any, id: string) {
    return {
      id: id || "",
      assignmentName: obj.assignmentName || "",
      startDate: obj.startDate || "",
      endDate: obj.endDate || "",
      salesVolume: obj.salesVolume || "",
      assignmentInfo: obj.assignemtInfo || "",
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
    console.log(this.customer);
  }

  saveNote() {
    addDoc(this.db, this.note.toJSON())
  }

  saveOrder() {
    addDoc(this.dba, this.assignment.toJSON())
  }

  ngOnDestroy() {
    this.unsubList();
    this.unsubListM();
    this.unsubListU();
    this.unsubListC();
    this.unsubListA();
  }

  getNoteRef() {
    return collection(this.firestore, 'notes');
  }

  getCustomerRef() {
    return collection(this.firestore, 'customers');
  }

  getUserRef() {
    return collection(this.firestore, 'users');
  }

  getMeetingRef() {
    return collection(this.firestore, 'meetings');
  }

  getAssignmentRef() {
    return collection(this.firestore, 'assignment');
  }

  getAssignmentsByCustomerId(customerId: string) {
    const AssignmentsCollRef = collection(this.firestore, 'assignment');
    // Create a query against the collection.
    const q = query(AssignmentsCollRef, where("customerId", "==", customerId));
    return q;
  }

  getSingleRef() {
    return doc(collection(this.firestore, 'users'), this.user.id);
  }

  async saveEditUser() {
    this.loading = true;
    await updateDoc(this.getSingleRef(), JSON.parse(JSON.stringify(this.user)));

  }




}
