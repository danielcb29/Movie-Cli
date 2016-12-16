import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from 'rxjs';

@Injectable()
export class MovieDetailService {

	/**
	* Url of API to get movie information
	**/
	baseUrl: string = "https://api.themoviedb.org/3/movie";
	/**
	* API Key of Daniel
	**/
	apiKey: string = "6dc0d2605088c01254ffedbd444bc2e4";


	constructor(private http: Http){}

	/**
	* Get movie details requesting to the tmbd api
	* @param {id} Movie tmdb id
	* @return Observable with esponse
	**/
	getMovieDetail(id: string): Observable<any>{
		return this.http.get(`${this.baseUrl}/${id}?api_key=${this.apiKey}`)
		.map(response => {
			return response.json(); 
		})
	}

	/**
	* Get movie details requesting to the tmbd api
	* @param {id} Movie tmdb id
	* @return Observable with response
	**/
	getMovieVideos(id: string): Observable<any>{
		let videoUrl: string = '/videos'; 
		return this.http.get(`${this.baseUrl}/${id}${videoUrl}?api_key=${this.apiKey}`)
		.map(response => {
			return response.json().results; 
		})	
	}
}