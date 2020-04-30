import { Component, OnInit, OnChanges } from '@angular/core';
import { Covidservice } from 'src/app/core/services/covid-report.service';
import { StateWiseReport } from 'src/app/core/models/covid-state-report';
import { CovidDistrictReport, DistrictData } from 'src/app/core/models/covid-district-report';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'covid-app-dashboard-states-report',
  templateUrl: './dashboard-states-report.component.html',
  styleUrls: ['./dashboard-states-report.component.scss']
})
export class DashboardStatesReportComponent implements OnInit {

  public reports: Array<StateWiseReport>;

  public districtReport: CovidDistrictReport;

  constructor(private readonly covidservice: Covidservice, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.districtReport = this.route.snapshot.data.dashboardDistrictData;
    this.reports = this.route.snapshot.data.dashboardStateData.statewise;
    // this.covidservice.getCovidStateReport().subscribe(data => {
    //   this.reports = data.statewise;
    // });
  }

  getDistrictData(state: DistrictData) {
    console.log(state);
  }

  onClick(stateCode: string, $event: MouseEvent) {
    console.log(stateCode)
    if (stateCode === 'TT') {
      $event.stopPropagation();
    }

  }

}




