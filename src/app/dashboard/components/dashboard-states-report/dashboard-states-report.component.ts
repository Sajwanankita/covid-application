import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Constants } from 'src/app/core/constants/app-constants';
import { CovidDistrictReport } from 'src/app/core/models/covid-district-report';
import { StateWiseReport } from 'src/app/core/models/covid-state-report';

@Component({
  selector: 'covid-app-dashboard-states-report',
  templateUrl: './dashboard-states-report.component.html',
  styleUrls: ['./dashboard-states-report.component.scss']
})
export class DashboardStatesReportComponent implements OnInit {

  public reports: Array<StateWiseReport>;

  public districtReport: CovidDistrictReport;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.districtReport = this.route.snapshot.data.dashboardDistrictData;
    this.reports = this.route.snapshot.data.dashboardStateData.statewise;
  }

  onClick(stateCode: string, $event: MouseEvent): void {
    if (stateCode === Constants.STATE_CODE_TOTAL) {
      $event.stopPropagation();
    }
  }

}




