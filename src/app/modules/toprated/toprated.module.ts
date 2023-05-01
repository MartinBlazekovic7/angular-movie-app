import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMoviesComponent } from './top-movies/top-movies.component';
import { TopShowsComponent } from './top-shows/top-shows.component';
import { TopratedRoutingModule } from './toprated-routing.module';

@NgModule({
  declarations: [TopMoviesComponent, TopShowsComponent],
  imports: [CommonModule, TopratedRoutingModule],
})
export class TopratedModule {}
