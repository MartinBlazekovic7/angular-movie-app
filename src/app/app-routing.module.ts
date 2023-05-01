import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoveryModule } from './modules/discovery/discovery.module';
import { ArtistDetailsComponent } from './modules/shared/details/artist-details/artist-details.component';
import { MovieDetailsComponent } from './modules/shared/details/movie-details/movie-details.component';
import { ShowDetailsComponent } from './modules/shared/details/show-details/show-details.component';
import { TopratedModule } from './modules/toprated/toprated.module';
import { ArtistsComponent } from './pages/artists/artists.component';
import { HomeComponent } from './pages/home/home.component';
import { LiveNowComponent } from './pages/live-now/live-now.component';
import { SearchComponent } from './pages/search/search.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'discovery', loadChildren: () => DiscoveryModule },
  { path: 'search', component: SearchComponent },
  { path: 'livenow', component: LiveNowComponent },
  { path: 'toprated', loadChildren: () => TopratedModule },
  { path: 'artists', component: ArtistsComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'show/:id', component: ShowDetailsComponent },
  { path: 'artist/:id', component: ArtistDetailsComponent },
  //{ path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
