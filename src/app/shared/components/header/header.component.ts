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

  ngOnInit() {
    localStorage.setItem('', '');
  }

  login(a: string) {
    console.log(a);
    this.router.navigate(['news']);
  }

}

