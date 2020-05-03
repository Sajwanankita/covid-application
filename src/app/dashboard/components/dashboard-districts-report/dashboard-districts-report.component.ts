import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CovidDistrictReportMetaData } from 'src/app/core/models/covid-district-report';

@Component({
  selector: 'covid-app-dashboard-districts-report',
  templateUrl: './dashboard-districts-report.component.html',
  styleUrls: ['./dashboard-districts-report.component.scss']
})
export class DashboardDistrictsReportComponent implements OnInit, OnChanges {

  @Input() districtData: CovidDistrictReportMetaData;
  reports: any;
  districtName: string;
  displayedColumns: string[] = ['district', 'active-cases', 'confirmed-cases', 'diseased-cases', 'recovered-cases'];

  ngOnInit(): void {
    if (this.districtData) {
      this.reports = this.districtData.districtData;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.districtData && this.districtData) {
      this.reports = this.districtData.districtData;
    }
  }
}
