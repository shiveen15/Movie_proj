import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CountdownModule } from 'ngx-countdown';
import { MovieProjComponent } from './movie-proj/movie-proj.component';
import { MoviecardComponent } from './moviecard/moviecard.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MovieProjComponent,
    MoviecardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CountdownModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
