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
        return this.http.get<News[]>(this.apiurl);
    }

    addNews(news: News): void {
        console.log('here.... hhhhhhhhhhhhh...');
        console.log(news);
        this.http.post<News>(this.apiurl, news, this.httpOptions);
    }
}
