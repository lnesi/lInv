import { Component } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content-delete',
  templateUrl:'./deleteModal.template.html'
})

export class NgbdModalContentDelete {
  constructor(public activeModal: NgbActiveModal) {}
}