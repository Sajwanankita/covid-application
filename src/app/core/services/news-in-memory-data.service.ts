import { Injectable } from '@angular/core';
import { News } from '../models/news';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryNewsDataService implements InMemoryDbService {
  createDb() {

    /** Default News collection. */
    const news: News[] = [{
      id: 1,
      title: 'Neha Jain',
      summary: 'nj@gmail.com',
      description: '9876543210',
      fullNews: '9876543210'
    }, {
      id: 2,
      title: 'Neha Jain',
      summary: 'nj@gmail.com',
      description: '9876543210',
      fullNews: '9876543210'
    }];

    return { news };
  }

  genId(news: News[]): number {
    return news.length > 0 ? Math.max(...news.map(user => user.id)) + 1 : 1;
  }
}

