import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from './core/constants/app-constants';
import { Link } from './core/models/link';

@Component({
  selector: 'covid-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  links: Array<Link>;

  constructor(private readonly router: Router) {
  }

  ngOnInit(): void {
    this.links = this.getLinks();
  }

  isRouteActive(link: string): boolean {
    return (Constants.ROUTE_SEPARATOR + link) === this.router.url ? true : false;
  }

  getLinks(): Array<Link> {
    return [{
      link: Constants.DASHBOARD_ROUTE,
      title: 'Dasboard'
    },
    {
      link: Constants.NEWS_ROUTE,
      title: 'Latest News'
    },
    {
      link: Constants.PRECAUTIONS_ROUTE,
      title: 'Precautions'
    }
    ];
  }
}

