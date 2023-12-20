import { Component,} from '@angular/core';
import { DialogAddNotesComponent } from '../dialog-add-notes/dialog-add-notes.component';
import { MatDialog} from '@angular/material/dialog';
import { FirebaseServiceService } from '../firebase-service.service';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {

  constructor(private noteService: FirebaseServiceService, public dialog: MatDialog ) {  
  }

  getlist() {
    return this.noteService.noteList;
  }

  openDialogNote() {
    this.dialog.open(DialogAddNotesComponent);
  }


}
