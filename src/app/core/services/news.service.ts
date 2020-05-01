import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { News } from '../models/news';
import { catchError } from 'rxjs/operators';
import { BaseDataService } from './base-service';
import { DataServiceError } from './error-data';


@Injectable({
    providedIn: 'root'
})
export class NewsService extends BaseDataService {

    apiurl = 'api/news';
    headers = new HttpHeaders().set('Content-Type', 'application/json');
    httpOptions = {
        headers: this.headers
    };

    constructor(private http: HttpClient) {
        super()
    }

    fetchNews(): Observable<News[] | DataServiceError> {
        return this.http.get<News[]>(this.apiurl).pipe(catchError(this.handleError));
    }

    addNews(news: News): Observable<any> {
        return this.http.post<News>(this.apiurl, news, this.httpOptions).pipe(catchError(this.handleError));
    }
}
