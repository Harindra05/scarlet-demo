import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddServiceHeaderComponent } from 'src/app/components/modal/add-service-header/add-service-header.component';
import { AddServiceComponent } from 'src/app/components/modal/add-service/add-service.component';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor(public modal :NgbModal) { }

  ngOnInit(): void {
  }
  async addServicePopup(){
    this.modal.open(AddServiceComponent,{size :'sm',centered:true})
  }
  async addHeaderServicePopup(){
    this.modal.open(AddServiceHeaderComponent,{size :'sm',centered:true})


  }

}
