import { Component } from '@angular/core';
import {NgbdModalContentConfirm} from './../../../components/common/confirmModal.component'
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';



@Component({
  templateUrl: './users.template.html'
})

export class UsersComponent { 
	constructor(private modalService: NgbModal) {}
	deleteConfirmation(userID){
	  	const modalRef = this.modalService.open(NgbdModalContentConfirm);
	  	modalRef.result.then((result) => {
      		if(result){
      			console.log("delete user");
      		}
    	});
	  	modalRef.componentInstance.question = 'Are you sure you want to delete?';
	  	modalRef.componentInstance.title = 'Delete';
	  	modalRef.componentInstance.fa_icon = 'fa-trash';
   }
}