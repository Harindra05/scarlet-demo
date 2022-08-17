import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalManager } from 'ngb-modal';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent implements OnInit {
  @ViewChild('myModal') myModal:any;
  private modalRef!:any;
  constructor(private modalService: ModalManager){}


  ngOnInit(): void {
  }
  openModal(){
    this.modalRef = this.modalService.open(this.myModal, {
        size: "md",
        modalClass: 'mymodal',
        hideCloseButton: false,
        centered: false,
        backdrop: true,
        animation: true,
        keyboard: false,
        closeOnOutsideClick: true,
        backdropClass: "modal-backdrop"
    })
}
closeModal(){
    this.modalService.close(this.modalRef);
    //or this.modalRef.close();
}
}
