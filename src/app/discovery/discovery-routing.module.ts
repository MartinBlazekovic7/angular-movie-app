import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {MoviesComponent} from "./movies/movies.component";
import {ShowsComponent} from "./shows/shows.component";


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'home', component: MoviesComponent},
  {path: 'shows', component: ShowsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscoveryRoutingModule { }
