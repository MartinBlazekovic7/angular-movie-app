import { Component, OnInit } from '@angular/core';
import {ShowsService} from "../../other/services/shows.service";
import {ActivatedRoute} from "@angular/router";
import {ShowDetails, ShowTrailer} from "../../other/model/show.model";
import {CastPerson, Provider, ProviderOptions} from "../../other/model/movie.model";


@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {

  showId: string;
  show: ShowDetails;

  cast: CastPerson[];

  showVideos: ShowTrailer[];
  trailerLink: string = 'https://www.youtube.com/watch?v=';

  providers: ProviderOptions;
  providersList: Provider[] = [];

  constructor(private route: ActivatedRoute, private showService: ShowsService) { }

  ngOnInit(): void {
    this.showId = this.route.snapshot.paramMap.get('id');

    this.showService.getDetails(this.showId)
      .subscribe(response => {
        this.show = response;
        console.log(this.show);
      });

    this.showService.getTrailer(this.showId)
      .subscribe(response => {
        this.showVideos = response.results;
        this.showVideos = this.showVideos.filter(r => r.type === 'Trailer' && r.site === 'YouTube');
        this.trailerLink = this.trailerLink + this.showVideos[0].key;
        console.log(this.trailerLink);
      });

    this.showService.getCredits(this.showId)
      .subscribe(response => {
        this.cast = response.cast;
        console.log(this.cast);
      });

    this.showService.getProviders(this.showId)
      .subscribe(response => {
        this.providers = response.results.HR;
        console.log(this.providers);
      });
  }

  playTrailer() {
    window.open(this.trailerLink, "_blank");
  }

}
