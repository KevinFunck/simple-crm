import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NoteComponent } from './note/note.component';
import { CalenderComponent } from './calender/calender.component';
import { StartpageComponent } from './startpage/startpage.component';
import { CustomersComponent } from './customers/customers.component';



const routes: Routes = [
  {path: '', component: StartpageComponent},
  {path: 'customers', component:  CustomersComponent},
  {path: 'dashboard', component:  DashboardComponent},
  {path: 'user', component:  UserComponent},
  {path: 'user/:id', component : UserDetailComponent},
  {path: 'note', component : NoteComponent},
  {path: 'calender', component : CalenderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
