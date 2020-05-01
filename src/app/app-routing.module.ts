import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },

  {
    path: 'dashboard',
    pathMatch: 'full',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),

  },
  {
    path: 'precautions',
    loadChildren: () => import('./precaution/precautions.module').then(m => m.PrecautionsModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./latest-news/latest-news.module').then(m => m.LatestNewsModule)
  },
  {
    path: 'login',
    pathMatch: 'full',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
