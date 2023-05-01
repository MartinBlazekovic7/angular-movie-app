import { Component, OnInit } from '@angular/core';
import {Genre} from "../../shared/other/model/movie.model";
import {ShowsService} from "../../shared/other/services/shows.service";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss'],
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
export class ShowsComponent implements OnInit {

  genres: Genre[] = []

  constructor(private showService: ShowsService) { }

  ngOnInit(): void {
    this.showService.getGenres()
      .subscribe(response => {
        this.genres = response.genres;
        console.log(this.genres);
      })
  }

}
