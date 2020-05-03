import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CanActivateRouteGuard } from './can-activate-add-news-route.guard';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { ListNewsComponent } from './components/list-news/list-news.component';
import { NewsComponent } from './components/news/news.component';
import { LatestNewsRoutingModule } from './latest-news-routing.module';

@NgModule({
  declarations: [ListNewsComponent, AddNewsComponent, NewsComponent],
  providers: [CanActivateRouteGuard],
  imports: [
    CommonModule, LatestNewsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LatestNewsModule { }
