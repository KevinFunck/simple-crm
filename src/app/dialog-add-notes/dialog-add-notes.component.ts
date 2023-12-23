import { Component} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FirebaseServiceService } from '../firebase-service.service';



@Component({
  selector: 'app-dialog-add-notes',
  templateUrl: './dialog-add-notes.component.html',
  styleUrls: ['./dialog-add-notes.component.scss']
})
export class DialogAddNotesComponent {
  loading: boolean = false;

  constructor(public noteService: FirebaseServiceService,public dialogRef: MatDialogRef<DialogAddNotesComponent>) {  
  }

  saveNote() {
    this.noteService.saveNote();
    this.dialogRef.close(); 
  }
}
