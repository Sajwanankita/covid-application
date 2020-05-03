import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CovidDistrictReport } from '../models/covid-district-report';
import { CovidStateReport } from '../models/covid-state-report';
import { DataServiceError } from '../models/error-data';
import { BaseDataService } from './base-service';

@Injectable({
    providedIn: 'root'
})
export class CovidDataService extends BaseDataService {
    private readonly covidStateReportUrl;
    private readonly covidDistrictReportUrl;

    constructor(private readonly httpClient: HttpClient) {
        super();
        this.covidStateReportUrl = 'https://api.covid19india.org/data.json';
        this.covidDistrictReportUrl = 'https://api.covid19india.org/state_district_wise.json';
    }

    getCovidStateReport(): Observable<CovidStateReport | DataServiceError> {
        return this.httpClient.get<CovidStateReport>(this.covidStateReportUrl).pipe(
            catchError(this.handleError)
        );
    }

    getCovidDistrictReport(): Observable<CovidDistrictReport | DataServiceError> {
        return this.httpClient.get<CovidDistrictReport>(this.covidDistrictReportUrl)
            .pipe(catchError(this.handleError));
    }

}

