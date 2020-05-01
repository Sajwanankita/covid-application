import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Covidservice } from './core/services/covid-report.service';
import { Router } from '@angular/router';
import { Link } from './core/models/link';
import { Constants } from './core/constants/app-constants';

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
      link: 'dashboard',
      title: 'Dasboard'
    },
    {
      link: 'news',
      title: 'Latest News'
    },
    {
      link: 'precautions',
      title: 'Precautions'
    }
    ];
  }
}

