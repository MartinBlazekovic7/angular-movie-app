import {Component, Input, OnInit} from '@angular/core';
import {Genre, Movie} from "../../../shared/other/model/movie.model";
import {MoviesService} from "../../../shared/other/services/movies.service";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-movie-genre',
  templateUrl: './movie-genre.component.html',
  styleUrls: ['./movie-genre.component.scss'],
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
export class MovieGenreComponent implements OnInit {

  @Input()
  genre: Genre;

  movies: Movie[];

  currPage: number = 0;
  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    console.log(this.genre.name);
    this.movieService.getMoviesByGenre(this.genre.id)
      .subscribe(response => {
        this.movies = response.results;
        console.log(this.movies);
      })
  }

  nextSlide(){
    if(this.currPage === 15) {
      this.currPage = 0;
    } else this.currPage = this.currPage + 5;
  }
  prevSlide(){
    if(this.currPage === 0){
      this.currPage = 15;
    } else this.currPage = this.currPage - 5;
  }

}
