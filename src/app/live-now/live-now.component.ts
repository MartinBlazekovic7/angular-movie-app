import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../shared/other/services/movies.service";
import {Movie} from "../shared/other/model/movie.model";

@Component({
  selector: 'app-live-now',
  templateUrl: './live-now.component.html',
  styleUrls: ['./live-now.component.scss']
})
export class LiveNowComponent implements OnInit {

  nowPlaying: Movie[];

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {

    this.movieService.getNowPlaying()
      .subscribe(response => {
        this.nowPlaying = response.results;
        console.log(this.nowPlaying);
      })

  }

}
