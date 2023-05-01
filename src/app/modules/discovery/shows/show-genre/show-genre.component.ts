import {Component, Input, OnInit} from '@angular/core';
import {Genre} from "../../../shared/other/model/movie.model";
import {ShowsService} from "../../../shared/other/services/shows.service";
import {Show} from "../../../shared/other/model/show.model";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-show-genre',
  templateUrl: './show-genre.component.html',
  styleUrls: ['./show-genre.component.scss'],
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
export class ShowGenreComponent implements OnInit {

  @Input()
  genre: Genre;

  shows: Show[];

  currPage: number = 0;
  constructor(private showService: ShowsService) { }

  ngOnInit(): void {
    this.showService.getShowsByGenre(this.genre.id)
      .subscribe(response => {
        this.shows = response.results;
        console.log(this.shows);
      })
  }

  nextSlide(){
    if(this.currPage === 15) {
      this.currPage = 0;
    } else this.currPage = this.currPage + 5;
  }
  prevSlide(){
    if(this.currPage === 0){
      this.currPage = 15;
    } else this.currPage = this.currPage - 5;
  }

}
