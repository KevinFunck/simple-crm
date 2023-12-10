import { Component, inject } from '@angular/core';
import { Firestore} from '@angular/fire/firestore';
import { Note } from 'src/models/notes.class';
import {collection, onSnapshot } from 'firebase/firestore';

@Component({
  selector: 'app-dialog-note-card',
  templateUrl: './dialog-note-card.component.html',
  styleUrls: ['./dialog-note-card.component.scss']
})
export class DialogNoteCardComponent {
  firestore: Firestore = inject(Firestore);
  notes: Note = new Note();
  noteList: any = [];
  unsubList;

  constructor() {
    this.unsubList = this.SubNotesList();
  }

  SubNotesList() {
    return onSnapshot(this.getNoteRef(), (list) => {
      this.noteList = [];
      list.forEach(element => {
        this.noteList.push(this.setNoteObject(element.data(), element.id));
      });
    }

  setNoteObject(obj: any, id: string) {
      return {
        id: id || "",
        title: obj.title || "",
        description: obj.description || "",

      }
    }

  getNoteRef(){
      return collection(this.firestore, 'notes');
    }
  }
 
 
  
 
  ngOnDestroy(){
    this.unsubList();
  }
}


