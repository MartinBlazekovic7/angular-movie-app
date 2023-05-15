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

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id');

    this.movieService.getDetails(this.movieId).subscribe((response) => {
      this.movie = response;
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
}
