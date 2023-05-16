import { Component, OnInit } from '@angular/core';
import { Favorites } from 'src/app/modules/shared/other/model/favorites.model';
import {
  Movie,
  MovieDetails,
} from 'src/app/modules/shared/other/model/movie.model';
import {
  Show,
  ShowDetails,
} from 'src/app/modules/shared/other/model/show.model';
import { LoaderService } from 'src/app/modules/shared/other/services/loader.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favorites: Favorites = {
    movies: [],
    shows: [],
    artists: [],
  };
  movies: MovieDetails[];
  shows: ShowDetails[];

  constructor(private loaderService: LoaderService) {}
  ngOnInit(): void {
    this.loaderService.show();

    if (localStorage.getItem('favorites')) {
      this.favorites = JSON.parse(localStorage.getItem('favorites'));
      this.movies = this.favorites.movies;
      this.shows = this.favorites.shows;
    } else {
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }

    setInterval(() => {
      this.loaderService.hide();
    }, 1200);
  }
}
