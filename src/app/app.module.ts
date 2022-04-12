import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaseComponent } from './case/case.component';
import { HomeComponent } from './home/home.component';
import { AppartamentiComponent } from './appartamenti/appartamenti.component';

@NgModule({
  declarations: [
    AppComponent,
    CaseComponent,
    HomeComponent,
    AppartamentiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
