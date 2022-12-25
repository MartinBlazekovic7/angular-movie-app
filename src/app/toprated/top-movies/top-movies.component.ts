import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../shared/other/services/movies.service";
import {Movie, MovieResponse} from "../../shared/other/model/movie.model";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('1.5s ease-out',
              style({ opacity: 1 }))
          ]
        )]
    )
  ]
})
export class TopMoviesComponent implements OnInit {

  movieResponse: MovieResponse;
  movies: Movie[];

  page: number = 1;

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.movieService.getTopRated(this.page)
      .subscribe(response => {
        this.movieResponse = response;
        this.movies = this.movieResponse.results;
        console.log(this.movies);
      });
  }

  loadMore(){
    this.page++;
    this.movieService.getTopRated(this.page)
      .subscribe(response => {
        this.movieResponse = response;
        this.movies = [ ...this.movies, ...this.movieResponse.results];
        console.log(this.movies);
      });
  }

}
