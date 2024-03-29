import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoveryRoutingModule } from './discovery-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { ShowsComponent } from './shows/shows.component';
import { MovieGenreComponent } from './movies/movie-genre/movie-genre.component';
import { ShowGenreComponent } from './shows/show-genre/show-genre.component';
import { FlickityModule } from '../shared/other/directives/flickity/flickity.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MoviesComponent,
    ShowsComponent,
    MovieGenreComponent,
    ShowGenreComponent,
  ],
  exports: [MoviesComponent, ShowsComponent],
  imports: [CommonModule, DiscoveryRoutingModule, FlickityModule, SharedModule],
})
export class DiscoveryModule {}
