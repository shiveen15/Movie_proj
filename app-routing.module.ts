import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MoviecardComponent } from './moviecard/moviecard.component';
import { MovieProjComponent } from './movie-proj/movie-proj.component';

const routes : Routes = [
  { path: '', component: MovieProjComponent },
  { path: 'movieDetails', component: MoviecardComponent  }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
