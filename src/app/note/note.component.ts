import { Component, inject } from '@angular/core';
import { DialogAddNotesComponent } from '../dialog-add-notes/dialog-add-notes.component';
import { MatDialog} from '@angular/material/dialog';
import { Firestore} from '@angular/fire/firestore';
import {collection, onSnapshot } from 'firebase/firestore';
import { Note } from 'src/models/notes.class';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  firestore: Firestore = inject(Firestore);
  note: Note = new Note();
  noteList: any = [];
  unsubList;

  constructor(public dialog: MatDialog) {
    this.unsubList = this.subUsersList(); 
  }

  openDialogNote() {
    this.dialog.open(DialogAddNotesComponent);
  }

  subUsersList(){
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
    }
  }

  ngOnDestroy(){
    this.unsubList();
  }
  
  getNoteRef(){
   return collection(this.firestore, 'notes');
  }

}
