import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ScheduleAppointmentComponent } from 'src/app/components/modal/schedule-appointment/schedule-appointment.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
  }
  appointementSchedulePopup(){
    this.modal.open(ScheduleAppointmentComponent, { size: 'lg',centered:true })

  }
}
