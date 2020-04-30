import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { take, map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { Covidservice } from '../../core/services/covid-report.service';
import { CovidDistrictReport } from '../../core/models/covid-district-report';

@Injectable({
    providedIn: 'root'
})
export class DashboardDistrictDataResolverService implements Resolve<Observable<CovidDistrictReport>>{

    constructor(private covidService: Covidservice) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.covidService.getCovidDistrictReport().pipe(
            take(1),
            map(dashboardDistrictData => dashboardDistrictData)
        );
    }
}
