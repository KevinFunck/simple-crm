import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NoteComponent } from './note/note.component';


const routes: Routes = [
  {path: 'dashboard', component:  DashboardComponent},
  {path: 'user', component:  UserComponent},
  {path: 'user/:id', component : UserDetailComponent},
  {path: 'note', component : NoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
