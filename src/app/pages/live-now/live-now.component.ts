import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/modules/shared/other/model/movie.model';
import { LoaderService } from 'src/app/modules/shared/other/services/loader.service';
import { MoviesService } from 'src/app/modules/shared/other/services/movies.service';

@Component({
  selector: 'app-live-now',
  templateUrl: './live-now.component.html',
  styleUrls: ['./live-now.component.scss'],
})
export class LiveNowComponent implements OnInit {
  nowPlaying: Movie[];

  constructor(
    private movieService: MoviesService,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.loaderService.show();
    this.movieService.getNowPlaying().subscribe((response) => {
      this.nowPlaying = response.results;
      console.log(this.nowPlaying);
    });
    setInterval(() => {
      this.loaderService.hide();
    }, 1200);
    setInterval(() => {
      this.loaderService.hide();
    }, 1200);
  }
}
