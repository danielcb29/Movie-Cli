import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Genres } from './genres.mock';

@Injectable()
export class MovieHelperService {

	/**
	* Youtube emebed base url
	**/
	youtube: string = 'https://www.youtube.com/embed/';

	constructor(){}

	/**
	* Get genre names by id list
	* Use Genres mock to get it
	* @param {ids}: list of genre ids
	* @return List of strings genre names 
	**/
	getGenresName(ids: number[]): string[]{
		let result: string[] = []
		for(let id of ids){
			result.push(Genres[id]);
		}
		return result;
	}

	/**
	* Get movies names by movies object list 
	* @param {movies} movies object list
	* @return list of strings with movie names
	**/
	getMoviesNames(movies: Object[]): string[]{
		let result: string[] = []
		for(let movie of movies){
			if(movie['media_type'] == 'movie'){ // If is movie
				result.push(movie['original_title']); 
			}else{ //If is tv or other
				result.push(movie['original_name']);
			}
				
		}
		return result;
	}

	/**
	* Return a url with youtube embebed format 
	* @param{value} youtube id to be format to youtube embebed url
	* @return Url with youtube embebed format
	**/
	getMovieVideoUrl(value: string): string{
		return `${this.youtube}${value}`;

	}

}