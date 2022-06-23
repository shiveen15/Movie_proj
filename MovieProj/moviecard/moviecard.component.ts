import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.scss']
})
export class MoviecardComponent implements OnInit {

  movieObject: any;
  baseImageUrl = 'https://image.tmdb.org/t/p/w500';

  constructor(private movieService: MoviesService,
    private router: Router) { }

  ngOnInit(): void {
    if(!this.movieService.movieDetails){
      this.router.navigate([''])
    }
    this.movieObject = this.movieService.movieDetails;
    this.baseImageUrl += this.movieObject.backdrop_path;
  }

  backNavigate(){
    this.movieService.movieDetails = null;
    this.router.navigateByUrl('');
  }


}
