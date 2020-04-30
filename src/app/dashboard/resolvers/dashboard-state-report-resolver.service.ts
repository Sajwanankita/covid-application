import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { take, map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { Covidservice } from 'src/app/core/services/covid-report.service';
import { CovidStateReport} from './../../core/models/covid-state-report';

@Injectable({
    providedIn: 'root'
})
export class DashboardStateDataResolverService implements Resolve<Observable<CovidStateReport>> {

    constructor(private covidService: Covidservice) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.covidService.getCovidStateReport().pipe(
            take(1),
            map(dashboardStateData => dashboardStateData)
        );
    }
}
