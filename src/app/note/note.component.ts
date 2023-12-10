import { Component } from '@angular/core';
import { DialogAddNotesComponent } from '../dialog-add-notes/dialog-add-notes.component';
import { MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {

  constructor(public dialog: MatDialog) {}

  openDialogNote() {
    this.dialog.open(DialogAddNotesComponent);
  }

}
