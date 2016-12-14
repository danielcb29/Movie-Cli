import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Genres } from './genres.mock';

@Injectable()
export class MovieHelperService {

	constructor(){}

	getGenresName(ids: number[]): string[]{
		let result: string[] = []
		for(let id of ids){
			result.push(Genres[id]);
		}
		return result;
	}

	getMoviesNames(movies: Object[]): string[]{
		let result: string[] = []
		for(let movie of movies){
			if(movie['media_type'] == 'movie'){
				result.push(movie['original_title']);
			}else{
				result.push(movie['original_name']);
			}
				
		}
		return result;
	}


}