import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  CreditsResponse,
  GenreResponse,
  MovieDetails,
  MovieResponse,
  MovieTrailer,
  TrailerResponse,
  WatchProviderResponse,
} from '../model/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  API_KEY = '?api_key=1bdf07a878e60c35ec4b72268c4a797e&language=en-US&page=1';
  API_KEY_PAGE =
    '?api_key=1bdf07a878e60c35ec4b72268c4a797e&language=en-US&page=';
  API_KEY_DISCOVER =
    '?api_key=1bdf07a878e60c35ec4b72268c4a797e&language=en-US&sort_by=popularity.desc&page=1&with_genres=';

  UPCOMING_URL = 'https://api.themoviedb.org/3/movie/upcoming';
  POPULAR_URL = 'https://api.themoviedb.org/3/movie/popular';
  TOP_RATED_URL = 'https://api.themoviedb.org/3/movie/top_rated';
  DETAILS_URL = 'https://api.themoviedb.org/3/movie/';
  GENRES_URL = 'https://api.themoviedb.org/3/genre/movie/list';
  DISCOVER_URL = 'https://api.themoviedb.org/3/discover/movie';
  NOW_PLAYING_URL = 'https://api.themoviedb.org/3/movie/now_playing';

  constructor(private http: HttpClient) {}

  getUpcoming(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(this.UPCOMING_URL + this.API_KEY);
  }

  getPopular(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(this.POPULAR_URL + this.API_KEY);
  }

  getNowPlaying(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(this.NOW_PLAYING_URL + this.API_KEY);
  }

  getTopRated(page): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(
      this.TOP_RATED_URL + this.API_KEY_PAGE + page
    );
  }

  getDetails(id): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(this.DETAILS_URL + id + this.API_KEY);
  }

  getTrailer(id): Observable<TrailerResponse> {
    return this.http.get<TrailerResponse>(
      this.DETAILS_URL + id + '/videos' + this.API_KEY
    );
  }

  getCredits(id): Observable<CreditsResponse> {
    return this.http.get<CreditsResponse>(
      this.DETAILS_URL + id + '/credits' + this.API_KEY
    );
  }

  getProviders(id): Observable<WatchProviderResponse> {
    return this.http.get<WatchProviderResponse>(
      this.DETAILS_URL + id + '/watch/providers' + this.API_KEY
    );
  }

  getGenres(): Observable<GenreResponse> {
    return this.http.get<GenreResponse>(this.GENRES_URL + this.API_KEY);
  }

  getMoviesByGenre(genre): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(
      this.DISCOVER_URL + this.API_KEY_DISCOVER + genre
    );
  }
}
