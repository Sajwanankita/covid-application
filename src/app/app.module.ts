import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryNewsDataService } from './core/services/news-in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
