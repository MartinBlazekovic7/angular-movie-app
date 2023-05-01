import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SearchResponse, SearchResults} from "../model/search.model";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  API_URL = 'https://api.themoviedb.org/3/search/multi?api_key=1bdf07a878e60c35ec4b72268c4a797e&language=en-US&query='

  constructor(private http: HttpClient) { }

  getResults(query): Observable<SearchResponse>{
    return this.http.get<SearchResponse>(this.API_URL+query+'&page=1&include_adult=false');
  }


}
