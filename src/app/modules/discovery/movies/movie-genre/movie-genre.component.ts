import { Component, Input, OnInit } from '@angular/core';
import { Genre, Movie } from '../../../shared/other/model/movie.model';
import { MoviesService } from '../../../shared/other/services/movies.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-movie-genre',
  templateUrl: './movie-genre.component.html',
  styleUrls: ['./movie-genre.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1.5s ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class MovieGenreComponent implements OnInit {
  @Input()
  genre: Genre;

  movies: Movie[];

  currPage: number = 0;
  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movieService.getMoviesByGenre(this.genre.id).subscribe((response) => {
      this.movies = response.results;
    });
  }
}
