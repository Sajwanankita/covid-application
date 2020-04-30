import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListNewsComponent } from './list-news/list-news.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { NewsComponent } from './news/news.component';

const RULES_CONF_ROUTE: Routes = [
    {
        path: '',
        component: NewsComponent,
        children: [
            {
                path: '',
                component: ListNewsComponent,
            },
            {
                path: 'add-news',
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
