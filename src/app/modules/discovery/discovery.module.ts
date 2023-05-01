import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoveryRoutingModule } from './discovery-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { ShowsComponent } from './shows/shows.component';
import { MovieGenreComponent } from './movies/movie-genre/movie-genre.component';
import { ShowGenreComponent } from './shows/show-genre/show-genre.component';
import { FlickityModule } from '../shared/other/directives/flickity/flickity.module';

@NgModule({
  declarations: [
    MoviesComponent,
    ShowsComponent,
    MovieGenreComponent,
    ShowGenreComponent,
  ],
  exports: [MoviesComponent],
  imports: [CommonModule, DiscoveryRoutingModule, FlickityModule],
})
export class DiscoveryModule {}
