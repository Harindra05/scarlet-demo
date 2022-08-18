import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-select-specialists',
  templateUrl: './select-specialists.component.html',
  styleUrls: ['./select-specialists.component.scss']
})
export class SelectSpecialistsComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
