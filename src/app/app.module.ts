import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SiteCheckerComponent } from './site-checker/site-checker.component';
import { WebScraperComponent } from './web-scraper/web-scraper.component';
import { IpLookupComponent } from './ip-lookup/ip-lookup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SiteCheckerComponent,
    WebScraperComponent,
    IpLookupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
