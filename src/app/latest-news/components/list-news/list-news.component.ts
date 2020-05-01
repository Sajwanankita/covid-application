import { Component, OnInit } from '@angular/core';

import { News } from '../../../core/models/news';
import { NewsService } from '../../../core/services/news.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataServiceError } from 'src/app/core/services/error-data';
import { Constants } from 'src/app/core/constants/app-constants';


@Component({
  selector: 'covid-app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit {

  display = false;
  newsList: News[] | DataServiceError = [];

  constructor(private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly newsService: NewsService,
    private readonly toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.newsList = this.route.snapshot.data.newsData;
  }

  viewFullNews(): void {
    this.display = true;
  }

  addNews(): void {
    if (localStorage.getItem(Constants.AUTHENTICATION_TOKEN_KEY) === null) {
      this.router.navigate([Constants.LOGIN_ROUTE], { queryParams: { redirectTo: '/news/add-news' } });
      this.toastrService.info('Please login to add news!', Constants.COVID_INDIA_PORTAL);
    } else {
      this.router.navigate([Constants.ADD_NEWS_ROUTE], { relativeTo: this.route.parent });
    }
  }

}
