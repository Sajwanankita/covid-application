import { Component, OnInit } from '@angular/core';
import { Precaution } from 'src/app/core/models/precaution';
import { getPrecautions } from './../../../app/core/fixtures/precaution.fixture';

@Component({
  selector: 'covid-app-list-precaution',
  templateUrl: './list-precaution.component.html',
  styleUrls: ['./list-precaution.component.scss']
})
export class ListPrecautionComponent implements OnInit {

  precautions: Array<Precaution>
  ;
  title = 'Precautions';

  ngOnInit(): void {
    this.precautions = getPrecautions();
  }

}
