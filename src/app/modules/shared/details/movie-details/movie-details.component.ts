import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../other/services/movies.service';
import {
  CastPerson,
  Locale,
  MovieDetails,
  MovieTrailer,
  ProviderOptions,
  Provider,
} from '../../other/model/movie.model';
import { Favorites } from '../../other/model/favorites.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movieId: string;
  movie: MovieDetails;

  movieVideos: MovieTrailer[];
  trailerLink: string = 'https://www.youtube.com/watch?v=';

  cast: CastPerson[];

  providers: ProviderOptions;
  providersList: Provider[] = [];

  favorites: Favorites = {
    movies: [],
    shows: [],
    artists: [],
  };

  isFavoritedBoolean = false;

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id');

    this.movieService.getDetails(this.movieId).subscribe((response) => {
      this.movie = response;
      if (localStorage.getItem('favorites')) {
        this.favorites = JSON.parse(localStorage.getItem('favorites'));
        this.isFavorited();
      } else {
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
      }
    });
    this.movieService.getTrailer(this.movieId).subscribe((response) => {
      this.movieVideos = response.results;
      this.movieVideos = this.movieVideos.filter(
        (r) => r.type === 'Trailer' && r.site === 'YouTube'
      );
      this.trailerLink = this.trailerLink + this.movieVideos[0].key;
    });
    this.movieService.getCredits(this.movieId).subscribe((response) => {
      this.cast = response.cast;
    });
    this.movieService.getProviders(this.movieId).subscribe((response) => {
      this.providers = response.results.HR;
    });
  }

  playTrailer() {
    window.open(this.trailerLink, '_blank');
  }

  favorite() {
    this.favorites.movies.push(this.movie);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
    this.isFavorited();
  }
  unfavorite() {
    this.favorites.movies = this.favorites.movies.filter(
      (m) => m.id !== this.movie.id
    );
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
    this.isFavorited();
  }

  isFavorited() {
    this.isFavoritedBoolean = false;
    for (let i = 0; i < this.favorites.movies.length; i++) {
      if (this.favorites.movies[i].id === this.movie?.id) {
        this.isFavoritedBoolean = true;
        break;
      }
    }
  }
}
