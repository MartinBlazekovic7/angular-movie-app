import { Component, OnInit } from '@angular/core';
import {
  ArtistDetails,
  People,
} from 'src/app/modules/shared/other/model/people.model';
import { LoaderService } from 'src/app/modules/shared/other/services/loader.service';
import { PeopleService } from 'src/app/modules/shared/other/services/people.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
})
export class ArtistsComponent implements OnInit {
  popularArtists: People[] = [];
  popularArtistsDetails: ArtistDetails[] = [];
  constructor(
    private peopleService: PeopleService,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.loaderService.show();
    this.peopleService.getTrending().subscribe((response) => {
      this.popularArtists = response.results;
      this.popularArtists.map((artist) => {
        this.peopleService.getDetails(artist.id).subscribe((response) => {
          this.popularArtistsDetails.push(response);
        });
      });
    });
    setInterval(() => {
      this.loaderService.hide();
    }, 1200);
  }
}
