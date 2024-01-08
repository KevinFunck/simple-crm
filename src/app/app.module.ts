import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { DialogAddUserComponent } from './dialog-add-user/dialog-add-user.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {MatMenuModule} from '@angular/material/menu';
import { DialogEditUserComponent } from './dialog-edit-user/dialog-edit-user.component';
import { DialogEditAddressComponent } from './dialog-edit-address/dialog-edit-address.component';
import { NoteComponent } from './note/note.component';
import { DialogAddNotesComponent } from './dialog-add-notes/dialog-add-notes.component';
import { CalenderComponent } from './calender/calender.component';
import { DialogAddMeetingComponent } from './dialog-add-meeting/dialog-add-meeting.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomersComponent } from './customers/customers.component';
import { DialogAddCustomersComponent } from './dialog-add-customers/dialog-add-customers.component';
import { LoginSectionComponent } from './login-section/login-section.component';
import { DialogCreateAcoountComponent } from './dialog-create-acoount/dialog-create-acoount.component';
import { CutomerDetailAssignmentsComponent } from './cutomer-detail-assignments/cutomer-detail-assignments.component';
import { DialogEditCustomerComponent } from './dialog-edit-customer/dialog-edit-customer.component';
import { DialogEditCustomerAddressComponent } from './dialog-edit-customer-address/dialog-edit-customer-address.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { DialogAddOrderComponent } from './dialog-add-order/dialog-add-order.component';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';









@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    DialogAddUserComponent,
    UserDetailComponent,
    DialogEditUserComponent,
    DialogEditAddressComponent,
    NoteComponent,
    DialogAddNotesComponent,
    DialogAddMeetingComponent,
    CalenderComponent,
    CustomersComponent,
    DialogAddCustomersComponent,
    LoginSectionComponent,
    DialogCreateAcoountComponent,
    CutomerDetailAssignmentsComponent,
    DialogEditCustomerComponent,
    DialogEditCustomerAddressComponent,
    AssignmentsComponent,
    DialogAddOrderComponent,
    AssignmentDetailComponent
    
   


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatProgressBarModule,
    MatCardModule,
    MatMenuModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
