import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/modules/shared/other/model/people.model';
import { PeopleService } from 'src/app/modules/shared/other/services/people.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
})
export class ArtistsComponent implements OnInit {
  popularArtists: People[] = [];

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService.getTrending().subscribe((response) => {
      this.popularArtists = response.results;
      console.log(this.popularArtists);
    });
  }
}
