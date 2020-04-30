import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListNewsComponent } from './list-news/list-news.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { NewsComponent } from './news/news.component';
import { LatestNewsRoutingModule } from './latest-news-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListNewsComponent, AddNewsComponent, NewsComponent],
  imports: [
    CommonModule, LatestNewsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LatestNewsModule { }
