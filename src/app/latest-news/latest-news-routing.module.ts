import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateRouteGuard } from './can-activate-add-news-route.guard';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { ListNewsComponent } from './components/list-news/list-news.component';
import { NewsComponent } from './components/news/news.component';
import { NewsDataResolverService } from './resolvers/news.resolver';

const RULES_CONF_ROUTE: Routes = [
    {
        path: '',
        component: NewsComponent,
        children: [
            {
                path: '',
                component: ListNewsComponent,
                resolve: {
                    newsData: NewsDataResolverService
                }
            },
            {
                path: 'add-news',
                canActivate: [CanActivateRouteGuard],
                component: AddNewsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule
        .forChild(RULES_CONF_ROUTE)],
    exports: [RouterModule]
})
export class LatestNewsRoutingModule { }
