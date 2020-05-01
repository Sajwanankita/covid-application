import { Component, OnInit } from '@angular/core';

import { News } from './../../core/models/news';
import { NewsService } from '../../core/services/news.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'covid-app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit {

  display = false;
  newsList: News[] = [];

  constructor(private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly newsService: NewsService,
    private readonly toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.getNews();
  }

  viewFullNews() {
    this.display = true;
  }

  getNews() {
    this.newsService.addNews({
      title: 'here',
      description: 'her2',
      summary: 'hjhjhj',
      fullNews: 'gello'
    });
    this.newsService.fetchNews().subscribe(news => {
      console.log(news);
      this.newsList = news;
    });
  }

  addNews() {
    console.log(localStorage.getItem('TOKEN'));
    if (localStorage.getItem('TOKEN') === null) {
      this.router.navigate(['login'], { queryParams: { redirectTo: '/news/add-news' } });
      this.toastrService.info('Please login to add news!', 'Covid India Portal');
    } else {
      this.router.navigate(['add-news'], { relativeTo: this.route.parent })
    }
  }

}
