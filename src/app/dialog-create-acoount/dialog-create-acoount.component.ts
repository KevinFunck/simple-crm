import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-create-acoount',
  templateUrl: './dialog-create-acoount.component.html',
  styleUrls: ['./dialog-create-acoount.component.scss']
})
export class DialogCreateAcoountComponent {
  hide = true;

  backToLogin() {
    document.getElementById('cA')?.classList.add('d-none');
  }

}
