import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TopMoviesComponent} from "./top-movies/top-movies.component";
import {TopShowsComponent} from "./top-shows/top-shows.component";

const routes: Routes = [
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
  {path: 'movies', component: TopMoviesComponent},
  {path: 'shows', component: TopShowsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopratedRoutingModule { }
