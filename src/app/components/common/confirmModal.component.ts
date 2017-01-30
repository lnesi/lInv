import { Component, Input } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content-confirm',
  templateUrl:'./confirmModal.template.html'
})

export class NgbdModalContentConfirm {
  @Input() question;
  @Input() title;
  @Input() fa_icon="fa-exclamation-triangle";
  constructor(public activeModal: NgbActiveModal) {}
}