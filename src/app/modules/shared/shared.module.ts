import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistDetailsComponent } from './details/artist-details/artist-details.component';
import { SortingPipe } from './details/artist-details/sorting.pipe';
import { MovieDetailsComponent } from './details/movie-details/movie-details.component';
import { ShowDetailsComponent } from './details/show-details/show-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FlickityModule } from './other/directives/flickity/flickity.module';
import { LoaderComponent } from './loader/loader.component';
import { AppModule } from 'src/app/app.module';

@NgModule({
  declarations: [
    NavbarComponent,
    MovieDetailsComponent,
    ShowDetailsComponent,
    ArtistDetailsComponent,
    SortingPipe,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FlickityModule,
  ],
  exports: [
    NavbarComponent,
    MovieDetailsComponent,
    ShowDetailsComponent,
    ArtistDetailsComponent,
    SortingPipe,
    LoaderComponent,
  ],
})
export class SharedModule {}
