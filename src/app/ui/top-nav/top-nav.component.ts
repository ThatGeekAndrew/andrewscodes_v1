import { Component } from '@angular/core';

import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent {

  constructor(public auth: AuthService) { }

  logout() {
    this.auth.signOut();
  }
}
