import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMoviesComponent } from './top-movies/top-movies.component';
import { TopShowsComponent } from './top-shows/top-shows.component';
import {TopratedRoutingModule} from "./toprated-routing.module";
import { TopMainComponent } from './top-main/top-main.component';



@NgModule({
  declarations: [
    TopMoviesComponent,
    TopShowsComponent,
    TopMainComponent
  ],
  imports: [
    CommonModule,
    TopratedRoutingModule
  ]
})
export class TopratedModule { }
