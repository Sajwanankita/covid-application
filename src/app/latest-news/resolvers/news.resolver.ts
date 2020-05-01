import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { take, map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { Covidservice } from '../../core/services/covid-report.service';
import { CovidDistrictReport } from '../../core/models/covid-district-report';
import { DataServiceError } from 'src/app/core/services/error-data';
import { News } from 'src/app/core/models/news';
import { NewsService } from 'src/app/core/services/news.service';

@Injectable({
    providedIn: 'root'
})
export class NewsDataResolverService implements Resolve<Observable<News[] | DataServiceError>>{

    constructor(private newsService: NewsService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.newsService.fetchNews().pipe(
            take(1),
            map(dashboardDistrictData => dashboardDistrictData)
        );
    }
}
