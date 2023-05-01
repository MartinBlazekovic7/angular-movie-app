import { Component, OnInit } from '@angular/core';
import {Show, ShowResponse} from "../../shared/other/model/show.model";
import {ShowsService} from "../../shared/other/services/shows.service";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-top-shows',
  templateUrl: './top-shows.component.html',
  styleUrls: ['./top-shows.component.scss'],
  animations: [
  trigger(
    'inOutAnimation',
    [
      transition(
        ':enter',
        [
          style({ opacity: 0 }),
          animate('1.5s ease-out',
            style({ opacity: 1 }))
        ]
      )]
  )
]
})
export class TopShowsComponent implements OnInit {

  showResponse: ShowResponse;
  shows: Show[];

  page: number = 1;

  constructor(private showsService: ShowsService) { }

  ngOnInit(): void {
    this.showsService.getTopRated(this.page)
      .subscribe(response => {
        this.showResponse = response;
        this.shows = this.showResponse.results;
        console.log(this.shows);
      });
  }

  loadMore(){
    this.page++;
    this.showsService.getTopRated(this.page)
      .subscribe(response => {
        this.showResponse = response;
        this.shows = [ ...this.shows, ...this.showResponse.results];
        console.log(this.shows);
      });
  }

}
