import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/core/constants/app-constants';

@Component({
  selector: 'covid-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public router: Router) {
  }

  isUserActive(): boolean {
    return (localStorage.getItem(Constants.AUTHENTICATION_TOKEN_KEY) !== null);
  }

  logoutUser(): void {
    localStorage.removeItem(Constants.AUTHENTICATION_TOKEN_KEY);
    if (this.router.url === '/news/add-news') {
      this.router.navigate([Constants.NEWS_ROUTE]);
    }
  }

}

