import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { take, map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { CovidDataService } from 'src/app/core/services/covid-report.service';
import { CovidStateReport } from './../../core/models/covid-state-report';
import { DataServiceError } from 'src/app/core/models/error-data';

@Injectable({
    providedIn: 'root'
})
export class DashboardStateDataResolverService implements Resolve<Observable<CovidStateReport | DataServiceError>> {

    constructor(private covidService: CovidDataService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.covidService.getCovidStateReport().pipe(
            take(1),
            map(dashboardStateData => dashboardStateData)
        );
    }
}
