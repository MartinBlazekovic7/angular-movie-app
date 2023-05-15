import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../shared/other/services/movies.service';
import { Genre } from '../../shared/other/model/movie.model';
import { animate, style, transition, trigger } from '@angular/animations';
import { LoaderService } from '../../shared/other/services/loader.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1.5s ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class MoviesComponent implements OnInit {
  genres: Genre[] = [];

  constructor(
    private movieService: MoviesService,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.loaderService.show();
    this.movieService.getGenres().subscribe((response) => {
      this.genres = response.genres;
      console.log(this.genres);
    });
    setInterval(() => {
      this.loaderService.hide();
    }, 1200);
  }
}
