import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import {FavoritesComponent} from "./shared/favorites/favorites.component";
import {DiscoveryModule} from "./discovery/discovery.module";
import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HomeComponent} from "./home/home.component";
import { ArtistsComponent } from './artists/artists.component';
import { MovieDetailsComponent } from './shared/details/movie-details/movie-details.component';
import { ShowDetailsComponent } from './shared/details/show-details/show-details.component';
import { ArtistDetailsComponent } from './shared/details/artist-details/artist-details.component';
import { SortingPipe } from './shared/details/artist-details/sorting.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SearchComponent } from './search/search.component';
import {TopratedModule} from "./toprated/toprated.module";
import { LiveNowComponent } from './live-now/live-now.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FavoritesComponent,
    ArtistsComponent,
    MovieDetailsComponent,
    ShowDetailsComponent,
    ArtistDetailsComponent,
    SortingPipe,
    SearchComponent,
    LiveNowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DiscoveryModule,
    TopratedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
