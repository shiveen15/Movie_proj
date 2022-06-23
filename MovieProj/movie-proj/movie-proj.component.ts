import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-proj',
  templateUrl: './movie-proj.component.html',
  styleUrls: ['./movie-proj.component.scss']
})
export class MovieProjComponent implements OnInit {

  constructor(private movieService: MoviesService,
    private router: Router) { }

  movie: any = [];
  movieImages: any = [];
  movieTitles: any = [];
  pages: any = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  image = '';
  baseImageUrl = 'https://image.tmdb.org/t/p/w500';
  banner = '';
  totalCards = 0;
  p: number = 1;
  lowToHigh = false;

  ngOnInit(): void {
    this.onclickk();
  }

  onclickk(page = 1) {
    this.movieService.getPopularMovies(page).subscribe((data) => {
      if (data) {
        this.hideloader();
        this.movie = data;
      }
    });
  }

  get bannerSrc(): string {
    if (this.movie && this.movie[8]) {
      this.banner = this.baseImageUrl + this.movie[8]?.backdrop_path;
    }
    return this.banner;
  }

  onclick() {
    console.log(this.movie);
    this.bannerImage();
  }

  bannerImage() {
    let key = this.movie[8]?.backdrop_path;
    this.banner = this.baseImageUrl + key;
  }

  nextPage(item: any) {
    this.onclickk(item);
  }

  navigate(items: any) {
    this.movieService.movieDetails = items;
    this.router.navigateByUrl("/movieDetails");
  }

  hideloader() {
    document!.getElementById('loading')!
      .style.display = 'none';
  }

  sort() {

    if (this.lowToHigh) {
      this.movie?.sort((a: any, b: any) => {
        return a.vote_average > b.vote_average ? 1 : -1;
      });
    } else {
      this.movie?.sort((a: any, b: any) => {
        return a.vote_average < b.vote_average ? 1 : -1;
      });

    }
    this.lowToHigh = !this.lowToHigh;
  }

}
