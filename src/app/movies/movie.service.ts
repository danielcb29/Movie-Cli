import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from 'rxjs';

@Injectable()
export class MovieService {

	/**
	* Tmdb enpoint to request movies
	**/
	baseUrl: string = "https://api.themoviedb.org/3/movie";
	/**
	* Daniel Api key to request tmdb api
	**/
	apiKey: string = "6dc0d2605088c01254ffedbd444bc2e4";


	constructor(private http: Http){}

	/**
	* Get popular movies of tmdb api
	* @return observable with results
	**/
	getPopular(): Observable<any>{
		let urlPopular = '/popular';
		return this.http.get(`${this.baseUrl}${urlPopular}?api_key=${this.apiKey}`)
		.map(response => {
			return response.json().results; 
		})
	}

	/**
	* Get upcoming movies of tmdb api
	* @return observable with results
	**/
	getUpcoming(): Observable<any>{
		let urlUpcoming = '/upcoming';
		return this.http.get(`${this.baseUrl}${urlUpcoming}?api_key=${this.apiKey}`)
		.map(response => {
			return response.json().results; 
		})
	}

	/**
	* Get top rated movies of tmdb api
	* @return observable with results
	**/
	getTopRated(): Observable<any>{
		let urlUpcoming = '/top_rated';
		return this.http.get(`${this.baseUrl}${urlUpcoming}?api_key=${this.apiKey}`)
		.map(response => {
			return response.json().results; 
		})
	}

	/**
	* Get now playing movies of tmdb api
	* @return observable with results
	**/
	getNowPlaying(): Observable<any>{
		let urlUpcoming = '/now_playing';
		return this.http.get(`${this.baseUrl}${urlUpcoming}?api_key=${this.apiKey}`)
		.map(response => {
			return response.json().results; 
		})
	}

}