import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../../other/services/shows.service';
import { ActivatedRoute } from '@angular/router';
import { ShowDetails, ShowTrailer } from '../../other/model/show.model';
import {
  CastPerson,
  ProviderOptions,
  Provider,
} from '../../other/model/movie.model';
import { Favorites } from '../../other/model/favorites.model';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss'],
})
export class ShowDetailsComponent implements OnInit {
  showId: string;
  show: ShowDetails;

  cast: CastPerson[];

  showVideos: ShowTrailer[];
  trailerLink: string = 'https://www.youtube.com/watch?v=';

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
    private showService: ShowsService
  ) {}

  ngOnInit(): void {
    this.showId = this.route.snapshot.paramMap.get('id');

    this.showService.getDetails(this.showId).subscribe((response) => {
      this.show = response;
      if (localStorage.getItem('favorites')) {
        this.favorites = JSON.parse(localStorage.getItem('favorites'));
        this.isFavorited();
      } else {
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
      }
    });

    this.showService.getTrailer(this.showId).subscribe((response) => {
      this.showVideos = response.results;
      this.showVideos = this.showVideos.filter(
        (r) => r.type === 'Trailer' && r.site === 'YouTube'
      );
      this.trailerLink = this.trailerLink + this.showVideos[0].key;
    });

    this.showService.getCredits(this.showId).subscribe((response) => {
      this.cast = response.cast;
    });

    this.showService.getProviders(this.showId).subscribe((response) => {
      this.providers = response.results.HR;
    });
  }

  playTrailer() {
    window.open(this.trailerLink, '_blank');
  }

  favorite() {
    this.favorites.shows.push(this.show);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
    this.isFavorited();
  }
  unfavorite() {
    this.favorites.shows = this.favorites.shows.filter(
      (m) => m.id !== this.show.id
    );
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
    this.isFavorited();
  }

  isFavorited() {
    this.isFavoritedBoolean = false;
    for (let i = 0; i < this.favorites.shows.length; i++) {
      if (this.favorites.shows[i].id === this.show?.id) {
        this.isFavoritedBoolean = true;
        break;
      }
    }
  }
}
