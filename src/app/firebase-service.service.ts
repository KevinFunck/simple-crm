import { Injectable, inject } from '@angular/core';
import { Firestore, collection, onSnapshot } from '@angular/fire/firestore';
import { Note } from 'src/models/notes.class';
import { User } from 'src/models/user.class';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
  
  firestore: Firestore = inject(Firestore);
  user: User = new User();
  note: Note = new Note();
  userList: any = [];
  noteList: any = [];
  unsubList;

 
  constructor() {
    this.unsubList = this.subUsersList(); 
    this.unsubList = this.subNotesList();
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

  setNoteObject(obj:any, id:string) {
    return {
      id: id || "",
      title: obj.title || "",
      description : obj.description  || "",
      amount : obj.amount || "1"  
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

  ngOnDestroy(){
    this.unsubList();
  }

  getNoteRef(){
    return collection(this.firestore, 'notes');
   }
  
  getUserRef(){
   return collection(this.firestore, 'users');
  }
}
