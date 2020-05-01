import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { News } from '../models/news';
import { catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class NewsService {

    apiurl = 'api/news';
    headers = new HttpHeaders().set('Content-Type', 'application/json');
    httpOptions = {
        headers: this.headers
    };

    constructor(private http: HttpClient) { }

    private handleError(error: any) {
        console.error(error);
        return throwError(error);
    }

    fetchNews(): Observable<News[]> {
        return this.http.get<News[]>(this.apiurl).pipe(catchError(this.handleError));
    }

    addNews(news: News): Observable<any> {
        console.log('here.... hhhhhhhhhhhhh...');
        console.log(news);
        return this.http.post<News>(this.apiurl, news, this.httpOptions).pipe(catchError(this.handleError));
    }
}
