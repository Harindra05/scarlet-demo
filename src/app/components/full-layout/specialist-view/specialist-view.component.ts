import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HaircutAndStylingComponent } from '../../modal/haircut-and-styling/haircut-and-styling.component';

@Component({
  selector: 'app-specialist-view',
  templateUrl: './specialist-view.component.html',
  styleUrls: ['./specialist-view.component.scss']
})
export class SpecialistViewComponent implements OnInit {

  constructor(private modal: NgbModal){}
  ngOnInit(): void {
  }
async openHairPopup(){
  this.modal.open(HaircutAndStylingComponent, { size: 'lg' })
}

}
