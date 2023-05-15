import { Component, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import {
  MovieResponse,
  Movie,
} from 'src/app/modules/shared/other/model/movie.model';
import {
  PeopleResponse,
  People,
} from 'src/app/modules/shared/other/model/people.model';
import {
  ShowResponse,
  Show,
} from 'src/app/modules/shared/other/model/show.model';
import { MoviesService } from 'src/app/modules/shared/other/services/movies.service';
import { PeopleService } from 'src/app/modules/shared/other/services/people.service';
import { ShowsService } from 'src/app/modules/shared/other/services/shows.service';
import { LoaderService } from 'src/app/modules/shared/other/services/loader.service';

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
    private peopleService: PeopleService,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.loaderService.show();
    this.movieService.getUpcoming().subscribe((response) => {
      this.movieResponse = response;
      this.upcoming = this.movieResponse.results;
    });
    this.showService.getPopular().subscribe((response) => {
      this.showResponse = response;
      this.popular = this.showResponse.results;
    });
    this.peopleService.getTrending().subscribe((response) => {
      this.peopleResponse = response;
      this.artists = this.peopleResponse.results;
    });

    setInterval(() => {
      this.loaderService.hide();
    }, 1200);

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
  }
  prevArtists() {
    if (this.currPage === 0) {
      this.currPage = 16;
    } else this.currPage = this.currPage - 4;
  }
}
