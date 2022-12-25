import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoveryRoutingModule } from './discovery-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { MainComponent } from './main/main.component';
import { ShowsComponent } from './shows/shows.component';
import {AppModule} from "../app.module";


@NgModule({
  declarations: [
    MoviesComponent,
    MainComponent,
    ShowsComponent
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
