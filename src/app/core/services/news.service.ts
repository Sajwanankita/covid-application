import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DataServiceError } from '../models/error-data';
import { News } from '../models/news';
import { BaseDataService } from './base-service';


@Injectable({
    providedIn: 'root'
})
export class NewsService extends BaseDataService {

    private subject = new Subject<any>();
    apiurl = 'api/news';
    headers = new HttpHeaders().set('Content-Type', 'application/json');
    httpOptions = {
        headers: this.headers
    };

    constructor(private http: HttpClient) {
        super();
    }

    fetchNews(): Observable<News[] | DataServiceError> {
        return this.http.get<News[]>(this.apiurl, {
            headers: this.headers
        }).pipe(catchError(this.handleError));
    }

    addNews(news: News): Observable<News | DataServiceError> {
        return this.http.post<News>(this.apiurl, news, this.httpOptions).pipe(catchError(this.handleError));
    }
}
