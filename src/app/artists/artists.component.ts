import { Component, OnInit } from '@angular/core';
import {PeopleService} from "../shared/other/services/people.service";
import {People} from "../shared/other/model/people.model";

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  popularArtists: People[] = [];

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {

    this.peopleService.getTrending()
      .subscribe(response => {
        this.popularArtists = response.results;
        console.log(this.popularArtists);
      })

  }

}
