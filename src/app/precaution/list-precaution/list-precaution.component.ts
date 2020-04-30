import { Component, OnInit } from '@angular/core';
import {  getPrecautions } from 'src/app/core/fixtures/precaution';
import { Precaution } from 'src/app/core/models/precaution';

@Component({
  selector: 'covid-app-list-precaution',
  templateUrl: './list-precaution.component.html',
  styleUrls: ['./list-precaution.component.scss']
})
export class ListPrecautionComponent implements OnInit {

  precautions: Array<Precaution>;
  constructor() { }

  ngOnInit() {
    this.precautions = getPrecautions();
  }

}
