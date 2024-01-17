import { Component, inject } from '@angular/core';
import { Firestore, collection, doc, onSnapshot } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Assignment } from 'src/models/assignment.class';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.scss']
})
export class AssignmentDetailComponent {
  firestore: Firestore = inject(Firestore);
  assignmentID: any;
  Assignment: Assignment = new Assignment();
  AssignmentList;

  constructor(private route: ActivatedRoute, public dialog: MatDialog) {
    this.assignmentID = this.route.snapshot.paramMap.get('id');
    this.AssignmentList = this.getUserFromFirebase();
  }

  ngOnDestroy() {
    this.AssignmentList();
  }

  getSingleRef() {
    return doc(collection(this.firestore, 'assignment'), this.assignmentID);
  }


  getUserFromFirebase() {
    return onSnapshot(this.getSingleRef(), (element) => {
      this.Assignment = new Assignment(element.data());
      this.Assignment.id = this.assignmentID;
    });
  }

  ngOnInit(): void {

  }

 


}
