import { Component } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent {
  closeResult: string;

  constructor(public auth: AuthService, private modalService: NgbModal) { }

  open(content: any) {
    this.modalService.open( content, {
      size: 'sm',
      centered: true,
      windowClass: 'animated fadeIn',
      // backdropClass: 'blurred'
    }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;

      if (result == 'logout') {
        this.auth.signOut();
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
