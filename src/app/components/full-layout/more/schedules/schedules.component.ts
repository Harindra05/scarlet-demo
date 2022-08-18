import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SelectServicesComponent } from 'src/app/components/modal/select-services/select-services.component';
import { SelectSpecialistsComponent } from 'src/app/components/modal/select-specialists/select-specialists.component';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {

  constructor(private modal :NgbModal) { }

  ngOnInit(): void {
  }
  async openSelectServicepopup(){
    this.modal.open(SelectServicesComponent, { size: 'lg',centered:true })
    
  }
  async openSpecilistPopup(){
    this.modal.open(SelectSpecialistsComponent),{size : 'md' ,centered:true}
  }
}
