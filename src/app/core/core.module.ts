import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryNewsDataService } from './services/news-in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, HttpClientModule,
    HttpClientInMemoryWebApiModule.forFeature(InMemoryNewsDataService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true
    }),

  ],
  exports: [
  ]
})
export class CoreModule { }
