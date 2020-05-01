import { Component, OnInit } from '@angular/core';
import { getPrecautions } from './../../../app/core/fixtures/precaution.fixture';
import { Precaution } from 'src/app/core/models/precaution';

@Component({
  selector: 'covid-app-list-precaution',
  templateUrl: './list-precaution.component.html',
  styleUrls: ['./list-precaution.component.scss']
})
export class ListPrecautionComponent implements OnInit {

  precautions: Array<Precaution>;

  ngOnInit(): void {
    this.precautions = getPrecautions();
  }

}
