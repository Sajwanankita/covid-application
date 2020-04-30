import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CovidStateReport } from '../models/covid-state-report';
import { CovidDistrictReport } from '../models/covid-district-report';

// TODO
@Injectable({
    providedIn: 'root'
})
export class Covidservice {
    private readonly CovidStateReportUrl;
    private readonly covidDistrictReportUrl;

    constructor(private readonly httpClient: HttpClient) {
        this.CovidStateReportUrl = 'http://api.covid19india.org/data.json';
        this.covidDistrictReportUrl = 'http://api.covid19india.org/state_district_wise.json';
    }

    public getCovidStateReport(): Observable<CovidStateReport> {
        console.log(this.CovidStateReportUrl);
        console.log(this.httpClient.get<CovidStateReport>(`${this.CovidStateReportUrl}`));
        return this.httpClient.get<CovidStateReport>(`${this.CovidStateReportUrl}`);
        // .pipe(catchError(this.handleError));
        // return this.httpClient.get<CovidStateReport>(`${this.CovidStateReportUrl}`)
        //     .pipe(catchError(this.handleError));
    }

    public getCovidDistrictReport(): Observable<CovidDistrictReport> {
        console.log(this.CovidStateReportUrl);
        return this.httpClient.get<CovidDistrictReport>(`${this.covidDistrictReportUrl}`)
            .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return throwError(
            'Something bad happened; please try again later.');
    }

}

