import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistDetailsComponent } from './details/artist-details/artist-details.component';
import { SortingPipe } from './details/artist-details/sorting.pipe';
import { MovieDetailsComponent } from './details/movie-details/movie-details.component';
import { ShowDetailsComponent } from './details/show-details/show-details.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FlickityModule } from './other/directives/flickity/flickity.module';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MovieDetailsComponent,
    ShowDetailsComponent,
    ArtistDetailsComponent,
    SortingPipe,
    LoaderComponent,
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
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MovieDetailsComponent,
    ShowDetailsComponent,
    ArtistDetailsComponent,
    SortingPipe,
    LoaderComponent,
  ],
})
export class SharedModule {}
