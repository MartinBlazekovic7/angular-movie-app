import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoveryRoutingModule } from './discovery-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { MainComponent } from './main/main.component';
import { ShowsComponent } from './shows/shows.component';
import { MovieGenreComponent } from './movies/movie-genre/movie-genre.component';
import { ShowGenreComponent } from './shows/show-genre/show-genre.component';


@NgModule({
  declarations: [
    MoviesComponent,
    MainComponent,
    ShowsComponent,
    MovieGenreComponent,
    ShowGenreComponent
  ],
  exports: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    DiscoveryRoutingModule
  ]
})
export class DiscoveryModule { }
