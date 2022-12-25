import { Component, OnInit } from '@angular/core';
import {PeopleService} from "../../other/services/people.service";
import {ActivatedRoute} from "@angular/router";
import {ArtistDetails, KnownFor} from "../../other/model/people.model";

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {

  artistId: string;
  artist: ArtistDetails;

  known_for: KnownFor[];

  movies: KnownFor[];
  shows: KnownFor[];

  movieNumber: number = 5;
  showNumber: number = 5;

  moreLessMovie: string = 'MORE';
  moreLessShow: string = 'MORE';

  constructor(private route: ActivatedRoute, private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.artistId = this.route.snapshot.paramMap.get('id');

    this.peopleService.getDetails(this.artistId)
      .subscribe(response => {
        this.artist = response;
        console.log(this.artist);
      });

    this.peopleService.getCredits(this.artistId)
      .subscribe(response => {
        this.known_for = response.cast;
        this.movies = this.known_for.filter(kf => kf.media_type === 'movie');
        this.shows = this.known_for.filter(kf => kf.media_type === 'tv');
        console.log(this.movies, this.shows);
      });

  }

  showMore(type) {
    if(type === 'movie'){
      if(this.movieNumber === 5){
        this.movieNumber = this.movies.length;
        this.moreLessMovie = 'LESS';
      }
      else {
        this.movieNumber = 5;
        this.moreLessMovie = 'MORE';
      }
    } else {
      if(this.showNumber === 5) {
        this.showNumber = this.shows.length;
        this.moreLessShow = 'LESS';
      }
      else {
        this.showNumber = 5;
        this.moreLessShow = 'MORE';
      }
    }
  }

}
