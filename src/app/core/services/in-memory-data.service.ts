import { Injectable } from '@angular/core';
import { News } from '../models/news';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
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
    const users: User[] = [
      {
        username: 'admin',
        password: 'admin'
      }
    ]
    return { news, users };
  }
}



