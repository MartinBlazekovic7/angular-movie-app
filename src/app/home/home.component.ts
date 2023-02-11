import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../shared/other/services/movies.service';
import { Movie, MovieResponse } from '../shared/other/model/movie.model';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { ShowsService } from '../shared/other/services/shows.service';
import { Show, ShowResponse } from '../shared/other/model/show.model';
import { People, PeopleResponse } from '../shared/other/model/people.model';
import { PeopleService } from '../shared/other/services/people.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1.5s ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  movieResponse: MovieResponse;
  showResponse: ShowResponse;
  peopleResponse: PeopleResponse;

  upcoming: Movie[] = [];
  currMovie: number = 0;

  popular: Show[] = [];
  currShow: number = 0;

  artists: People[] = [];
  currPage: number = 0;

  nextMovieSlideInterval = 10000;
  nextShowSlideInterval = 8000;

  constructor(
    private movieService: MoviesService,
    private showService: ShowsService,
    private peopleService: PeopleService
  ) {}

  ngOnInit(): void {
    this.movieService.getUpcoming().subscribe((response) => {
      this.movieResponse = response;
      this.upcoming = this.movieResponse.results;
      console.log(this.upcoming);
    });
    this.showService.getPopular().subscribe((response) => {
      this.showResponse = response;
      this.popular = this.showResponse.results;
      console.log(this.popular);
    });
    this.peopleService.getTrending().subscribe((response) => {
      this.peopleResponse = response;
      this.artists = this.peopleResponse.results;
      console.log(this.artists);
    });

    setInterval(() => {
      this.nextSlideMovie();
    }, this.nextMovieSlideInterval);
    setInterval(() => {
      this.nextSlideShow();
    }, this.nextShowSlideInterval);
  }

  nextSlideMovie() {
    if (this.currMovie === 19) {
      this.currMovie = 0;
    } else this.currMovie++;
  }
  prevSlideMovie() {
    if (this.currMovie === 0) {
      this.currMovie = 19;
    } else this.currMovie--;
  }
  nextSlideShow() {
    if (this.currShow === 19) {
      this.currShow = 0;
    } else this.currShow++;
  }
  prevSlideShow() {
    if (this.currShow === 0) {
      this.currShow = 19;
    } else this.currShow--;
  }
  nextArtists() {
    if (this.currPage === 16) {
      this.currPage = 0;
    } else this.currPage = this.currPage + 4;

    console.log(this.currPage);
  }
  prevArtists() {
    if (this.currPage === 0) {
      this.currPage = 16;
    } else this.currPage = this.currPage - 4;

    console.log(this.currPage);
  }
}
