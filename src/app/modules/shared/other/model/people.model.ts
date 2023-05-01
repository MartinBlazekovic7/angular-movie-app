export class People {
  adult: boolean;
  gender: number;
  id: number;
  known_for: KnownFor[];
  name: String;
  popularity: number;
  profile_path: String;
}

export class PeopleResponse {
  results: People[];
  page: number;
  total_pages: number;
  total_results: number;
}

export class KnownFor{
  adult: boolean;
  backdrop_path: String;
  genre_ids: number[];
  id: number;
  original_language: String;
  overview: String;
  popularity: number;
  poster_path: String;
  release_date: String;
  title: String;
  original_title: String;
  video: boolean;
  vote_average: number;
  vote_count: number;
  name: String;
  original_name: String;
  media_type: String;
  first_air_date: String;
}

export class ArtistDetails {
  biography: String;
  birthday: String;
  deathday: String;
  place_of_birth: String;
  name: String;
  profile_path: String;
}

export class ArtistCredits {
  id: number;
  cast: KnownFor[];
}

