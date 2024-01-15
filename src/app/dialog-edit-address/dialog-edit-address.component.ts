import { Component} from '@angular/core';

import { FirebaseServiceService } from '../firebase-service.service';
import { User } from 'src/models/user.class';


@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent {
  
  street:string = '';
  zipCode:string = '';
  city:string = '';
  loading: boolean = false;
  user: User = new User();


  constructor(private userService: FirebaseServiceService){}

  saveEditUser() {
    this.userService.user.street = this.street;
    this.userService.user.zipCode = this.zipCode;
    this.userService.user.city = this.city;
    this.userService.saveEditUser;

  }


 
}


