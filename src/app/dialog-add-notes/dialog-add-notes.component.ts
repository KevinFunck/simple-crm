import { Component} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FirebaseServiceService } from '../firebase-service.service';
import { Note } from 'src/models/notes.class';



@Component({
  selector: 'app-dialog-add-notes',
  templateUrl: './dialog-add-notes.component.html',
  styleUrls: ['./dialog-add-notes.component.scss']
})
export class DialogAddNotesComponent {
  loading: boolean = false;
  title: string = '';
  description: string = '';
 
  
  constructor(private noteService: FirebaseServiceService,public dialogRef: MatDialogRef<DialogAddNotesComponent>) {  
  }

  saveNote() {
    let note:Note = new Note({
      title: this.title,
      description: this.description
    });
    this.noteService.saveNote();
    this.dialogRef.close(); 
  }
}
