import { Component, inject } from '@angular/core';
import { Note } from 'src/models/notes.class';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-dialog-add-notes',
  templateUrl: './dialog-add-notes.component.html',
  styleUrls: ['./dialog-add-notes.component.scss']
})
export class DialogAddNotesComponent {
  loading: boolean = false;
  note = new Note;
  firestore: Firestore = inject(Firestore);
  db;

  

  constructor(public dialogRef: MatDialogRef<DialogAddNotesComponent>) {
    this.db = collection(this.firestore, 'notes');
  }

  saveNote() {
    addDoc(this.db, this.note.toJSON()).then(() => {
      console.log(this.note.id);
      this.dialogRef.close();
      
    })
  }
}
