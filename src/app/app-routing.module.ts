import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NoteComponent } from './note/note.component';
import { CalenderComponent } from './calender/calender.component';
import { CustomersComponent } from './customers/customers.component';
import { CutomerDetailAssignmentsComponent } from './cutomer-detail-assignments/cutomer-detail-assignments.component';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import { AssignmentsComponent } from './assignments/assignments.component';



const routes: Routes = [
  {path: 'customers', component:  CustomersComponent},
  {path: 'dashboard', component:  DashboardComponent},
  {path: 'user', component:  UserComponent},
  {path: 'user/:id', component : UserDetailComponent},
  {path: 'customers/:id', component : CutomerDetailAssignmentsComponent },
  {path: 'note', component : NoteComponent},
  {path: 'calender', component : CalenderComponent},
  {path: 'assignment', component : AssignmentsComponent},
  {path: 'assignment/:id', component : AssignmentDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
