import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { BandComponent } from './band/band.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    BandComponent,
    MemberDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
