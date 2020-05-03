import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/core/constants/app-constants';

@Component({
  selector: 'covid-app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {

  constructor(private readonly router: Router) { }

  goBack(): void {
    this.router.navigate([Constants.DASHBOARD_ROUTE]);
  }

}

