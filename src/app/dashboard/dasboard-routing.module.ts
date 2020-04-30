import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardStatesReportComponent } from './components/dashboard-states-report/dashboard-states-report.component';
import { DashboardStateDataResolverService } from './resolvers/dashboard-state-report-resolver.service';
import { DashboardDistrictDataResolverService } from './resolvers/dashboard-district-report-resolver.service';


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
