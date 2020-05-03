import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardStatesReportComponent } from './components/dashboard-states-report/dashboard-states-report.component';
import { DashboardDistrictDataResolverService } from './resolvers/dashboard-district-report-resolver.service';
import { DashboardStateDataResolverService } from './resolvers/dashboard-state-report-resolver.service';


const RULES_CONF_ROUTE: Routes = [
    {
        path: '',
        component: DashboardStatesReportComponent,
        resolve: {
            dashboardStateData: DashboardStateDataResolverService,
            dashboardDistrictData: DashboardDistrictDataResolverService
        }
    },
];

@NgModule({
    imports: [RouterModule
        .forChild(RULES_CONF_ROUTE)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
