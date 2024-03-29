import { Component, OnInit } from '@angular/core';
import { Show, ShowResponse } from '../../shared/other/model/show.model';
import { ShowsService } from '../../shared/other/services/shows.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { LoaderService } from '../../shared/other/services/loader.service';

@Component({
  selector: 'app-top-shows',
  templateUrl: './top-shows.component.html',
  styleUrls: ['./top-shows.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1.5s ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class TopShowsComponent implements OnInit {
  showResponse: ShowResponse;
  shows: Show[];

  page: number = 1;

  constructor(
    private showsService: ShowsService,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.loaderService.show();
    this.showsService.getTopRated(this.page).subscribe((response) => {
      this.showResponse = response;
      this.shows = this.showResponse.results;
    });
    setInterval(() => {
      this.loaderService.hide();
    }, 1200);
  }

  loadMore() {
    this.page++;
    this.showsService.getTopRated(this.page).subscribe((response) => {
      this.showResponse = response;
      this.shows = [...this.shows, ...this.showResponse.results];
    });
  }
}
