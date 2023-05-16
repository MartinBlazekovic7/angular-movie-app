import { MovieDetails } from './movie.model';
import { People } from './people.model';
import { ShowDetails } from './show.model';

export class Favorites {
  movies?: MovieDetails[];
  shows?: ShowDetails[];
  artists?: People[];
}
