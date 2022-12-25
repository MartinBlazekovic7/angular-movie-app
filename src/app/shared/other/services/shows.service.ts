import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ShowDetails, ShowResponse, TrailerResponseShow} from "../model/show.model";
import {CreditsResponse, TrailerResponse, WatchProviderResponse} from "../model/movie.model";

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  API_KEY = '?api_key=1bdf07a878e60c35ec4b72268c4a797e&language=en-US&page=1'
  API_KEY_PAGE = '?api_key=1bdf07a878e60c35ec4b72268c4a797e&language=en-US&page=1'

  TOP_RATED_URL = 'https://api.themoviedb.org/3/tv/top_rated';
  POPULAR_URL = 'https://api.themoviedb.org/3/tv/popular';
  DETAILS_URL = 'https://api.themoviedb.org/3/tv/';

  constructor(private http: HttpClient) { }

  getTopRated(page): Observable<ShowResponse>{
    return this.http.get<ShowResponse>(this.TOP_RATED_URL+this.API_KEY_PAGE+page);
  }

  getPopular(): Observable<ShowResponse>{
    return this.http.get<ShowResponse>(this.POPULAR_URL+this.API_KEY);
  }

  getDetails(id): Observable<ShowDetails>{
    return this.http.get<ShowDetails>(this.DETAILS_URL+id+this.API_KEY);
  }

  getTrailer(id): Observable<TrailerResponseShow>{
    return this.http.get<TrailerResponseShow>(this.DETAILS_URL+id+'/videos'+this.API_KEY);
  }

  getCredits(id): Observable<CreditsResponse>{
    return this.http.get<CreditsResponse>(this.DETAILS_URL+id+'/credits'+this.API_KEY);
  }

  getProviders(id): Observable<WatchProviderResponse>{
    return this.http.get<WatchProviderResponse>(this.DETAILS_URL+id+'/watch/providers'+this.API_KEY);
  }

}
