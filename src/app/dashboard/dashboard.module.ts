import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardDistrictsReportComponent } from './components/dashboard-districts-report/dashboard-districts-report.component';
import { DashboardStatesReportComponent } from './components/dashboard-states-report/dashboard-states-report.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dasboard-routing.module';

@NgModule({
  declarations: [DashboardDistrictsReportComponent, DashboardStatesReportComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
  ],
  exports: [
  ]
})
export class DashboardModule { }
