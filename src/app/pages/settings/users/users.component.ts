import { Component } from '@angular/core';
import {NgbdModalContentDelete} from './../../../components/common/deleteModal.component'
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';



@Component({
  templateUrl: './users.template.html'
})

export class UsersComponent { 
	constructor(private modalService: NgbModal) {}
	open(){
	  	const modalRef = this.modalService.open(NgbdModalContentDelete);
  }
}