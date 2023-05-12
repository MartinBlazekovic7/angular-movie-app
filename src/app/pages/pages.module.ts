import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsComponent } from './artists/artists.component';
import { HomeComponent } from './home/home.component';
import { LiveNowComponent } from './live-now/live-now.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { FlickityModule } from '../modules/shared/other/directives/flickity/flickity.module';
import { SharedModule } from '../modules/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    LiveNowComponent,
    ArtistsComponent,
    FavoritesComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FlickityModule,
    SharedModule,
  ],
  exports: [
    HomeComponent,
    SearchComponent,
    LiveNowComponent,
    ArtistsComponent,
    FavoritesComponent,
  ],
})
export class PagesModule {}
