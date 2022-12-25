import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DiscoveryModule} from "./discovery/discovery.module";
import {HomeComponent} from "./home/home.component";
import {UpcomingComponent} from "./upcoming/upcoming.component";
import {FavoritesModule} from "./favorites/favorites.module";
import {ArtistsComponent} from "./artists/artists.component";
import {MovieDetailsComponent} from "./shared/details/movie-details/movie-details.component";
import {ShowDetailsComponent} from "./shared/details/show-details/show-details.component";
import {ArtistDetailsComponent} from "./shared/details/artist-details/artist-details.component";
import {SearchComponent} from "./search/search.component";
import {TopratedModule} from "./toprated/toprated.module";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'discovery', loadChildren: () => DiscoveryModule},
  {path: 'search', component: SearchComponent},
  {path: 'upcoming', component: UpcomingComponent},
  {path: 'toprated', loadChildren: () => TopratedModule},
  {path: 'artists', component: ArtistsComponent},
  {path: 'favorites', loadChildren: () => FavoritesModule},
  {path: 'movie/:id', component: MovieDetailsComponent},
  {path: 'show/:id', component: ShowDetailsComponent},
  {path: 'artist/:id', component: ArtistDetailsComponent},
  //{ path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
