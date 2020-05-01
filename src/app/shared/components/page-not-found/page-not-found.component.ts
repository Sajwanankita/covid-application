import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/core/constants/app-constants';

@Component({
  selector: 'covid-app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {

  constructor(private route: Router) { }

  goBack(): void {
    if (localStorage.getItem(Constants.AUTHENTICATION_TOKEN_KEY) !== null) {
      this.route.navigate([Constants.ROUTE_SEPARATOR + Constants.DASHBOARD_ROUTE]);
    } else {
      this.route.navigate([Constants.ROUTE_SEPARATOR + Constants.LOGIN_ROUTE]);
    }
  }

} 
