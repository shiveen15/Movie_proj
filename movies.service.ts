import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movieDetails: any;

  constructor(private http:HttpClient) { }

  getPopularMovies(i : number) : Observable<any>{
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=4bc1410172a330e4b974529be98d9609&page='+i)
    .pipe(map(
      (res: any) => {
        if (res) {
          return res.results;
        }
      }
    ));
  }
}
