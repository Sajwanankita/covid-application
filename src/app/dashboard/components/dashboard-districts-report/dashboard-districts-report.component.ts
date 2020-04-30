import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';
import { Covidservice } from 'src/app/core/services/covid-report.service';
import { DistrictMetaData, DistrictData, CovidDistrictReportMetaData, CovidDistrictReport } from 'src/app/core/models/covid-district-report';
import { log } from 'util';

@Component({
  selector: 'covid-app-dashboard-districts-report',
  templateUrl: './dashboard-districts-report.component.html',
  styleUrls: ['./dashboard-districts-report.component.scss']
})
export class DashboardDistrictsReportComponent implements OnInit {

  @Input() districtData: CovidDistrictReport;
  reports: any;
  districtName: string;
  displayedColumns: string[] = ['districtName', 'position', 'name', 'weight', 'symbol'];

  constructor(private readonly covidService: Covidservice) {

  }

  ngOnInit() {
    if (this.districtData) {
      this.reports = this.districtData.districtData;
    }

  }

}

// const ELEMENT_DATA = [];