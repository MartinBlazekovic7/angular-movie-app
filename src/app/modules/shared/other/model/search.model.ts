export class SearchResults {
  id: number;
  overview: String;
  popularity: number;
  poster_path: String;
  backdrop_path: String;
  profile_path: String;
  title: String;
  name: String;
  media_type: String;
}

export class SearchResponse {
  results: SearchResults[];
}
