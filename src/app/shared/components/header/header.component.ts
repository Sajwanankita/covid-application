import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'covid-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) {
  }

  ngOnInit(): void {
  }

  isUserActive(): boolean {
    console.log(localStorage.getItem('TOKEN') !== null);
    return (localStorage.getItem('TOKEN') !== null);
  }

  logoutUser(): void {
    localStorage.removeItem('TOKEN');
    if (this.router.url === '/news/add-news') {
      this.router.navigate(['news']);
    }
  }

}

