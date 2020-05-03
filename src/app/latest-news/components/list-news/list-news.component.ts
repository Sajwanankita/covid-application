import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Constants } from 'src/app/core/constants/app-constants';
import { DataServiceError } from 'src/app/core/models/error-data';
import { News } from '../../../core/models/news';




@Component({
  selector: 'covid-app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit {

  display = false;
  newsList: News[] | DataServiceError = [];
  subscription: Subscription;

  constructor(private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly toastrService: ToastrService
  ) {
  }

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
