import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeDesWookiesComponent } from './liste-des-wookies/liste-des-wookies.component';
import { WookieResumeComponent } from './wookie-resume/wookie-resume.component';
import { WookieEditionComponent } from './wookie-edition/wookie-edition.component';
import { LoggerService } from './services/logger.service';
import { WookieService } from './services/wookie.service';

@NgModule({
  declarations: [
    AppComponent,
    ListeDesWookiesComponent,
    WookieResumeComponent,
    WookieEditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    LoggerService,
    WookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
