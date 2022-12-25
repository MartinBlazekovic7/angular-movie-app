import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ArtistCredits, ArtistDetails, PeopleResponse} from "../model/people.model";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  API_KEY = '?api_key=1bdf07a878e60c35ec4b72268c4a797e&language=en-US&page=1'
  TRENDING_URL = 'https://api.themoviedb.org/3/person/popular';
  DETAILS_URL = 'https://api.themoviedb.org/3/person/';

  constructor(private http: HttpClient) { }

  getTrending(): Observable<PeopleResponse>{
    return this.http.get<PeopleResponse>(this.TRENDING_URL+this.API_KEY);
  }

  getDetails(id): Observable<ArtistDetails>{
    return this.http.get<ArtistDetails>(this.DETAILS_URL+id+this.API_KEY);
  }

  getCredits(id): Observable<ArtistCredits>{
    return this.http.get<ArtistCredits>(this.DETAILS_URL+id+'/combined_credits'+this.API_KEY);
  }


}
