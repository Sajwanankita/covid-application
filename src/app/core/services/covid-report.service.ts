import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CovidStateReport } from '../models/covid-state-report';
import { CovidDistrictReport } from '../models/covid-district-report';
import { ToastrService } from 'ngx-toastr';
import { DataServiceError } from './error-data';
import { BaseDataService } from './base-service';

@Injectable({
    providedIn: 'root'
})
export class Covidservice extends BaseDataService {
    private readonly CovidStateReportUrl;
    private readonly covidDistrictReportUrl;

    constructor(private readonly httpClient: HttpClient) {
        super();
        this.CovidStateReportUrl = 'http://api.covid19india.org/data.json';
        this.covidDistrictReportUrl = 'http://api.covid19india.org/state_district_wise.json';
    }

    public getCovidStateReport(): Observable<CovidStateReport | DataServiceError> {
        return this.httpClient.get<CovidStateReport>(`${this.CovidStateReportUrl}`).pipe(
            catchError(this.handleError)
        );
    }

    public getCovidDistrictReport(): Observable<CovidDistrictReport | DataServiceError> {
        return this.httpClient.get<CovidDistrictReport>(`${this.covidDistrictReportUrl}`)
            .pipe(catchError(this.handleError));
    }

}

