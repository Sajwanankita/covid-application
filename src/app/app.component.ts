import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Covidservice } from './core/services/covid-report.service';
import { Router } from '@angular/router';

@Component({
  selector: 'covid-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'covid-app';
  links = [{
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
  activeLink = '';

  constructor(private readonly router: Router) {

  }

  ngOnInit() {

  }

  isRouteActive(link: string): boolean {
    return ('/' + link) === this.router.url ? true : false;
  }

}

