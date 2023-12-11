import { Component, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Note } from 'src/models/notes.class';
import { collection, onSnapshot } from 'firebase/firestore';


@Component({
  selector: 'app-dialog-note-card',
  templateUrl: './dialog-note-card.component.html',
  styleUrls: ['./dialog-note-card.component.scss']
})
export class DialogNoteCardComponent {
  firestore: Firestore = inject(Firestore);
  note: Note = new Note();
  noteList: any = [];
  unsubList;
  //unsubSingle;
  constructor() {
    this.unsubList = this.subUsersList(); 
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


