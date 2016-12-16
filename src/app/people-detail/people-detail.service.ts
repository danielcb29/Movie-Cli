import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from 'rxjs';

@Injectable()
export class PeopleDetailService {

	/**
	* Tmdb enpoint to request people
	**/
	baseUrl: string = "https://api.themoviedb.org/3/person";
	/**
	* Daniel Api key to request tmdb api
	**/
	apiKey: string = "6dc0d2605088c01254ffedbd444bc2e4";


	constructor(private http: Http){}

	/**
	* Get actor details of tmdb api
	**/
	getActorDetails(id: string): Observable<any>{
		return this.http.get(`${this.baseUrl}/${id}?api_key=${this.apiKey}`)
		.map(response => {
			return response.json(); 
		})
	}

	/**
	* Get actor cast of tmdb api
	**/
	getCastActor(id: string): Observable<any>{
		let creditsUrl: string = '/movie_credits';
		return this.http.get(`${this.baseUrl}/${id}${creditsUrl}?api_key=${this.apiKey}`)
		.map(response => {
			return response.json().cast; 
		})	
	}

	/**
	* Get actor crew of tmdb api
	**/
	getCrewActor(id: string): Observable<any>{
		let creditsUrl: string = '/movie_credits';
		return this.http.get(`${this.baseUrl}/${id}${creditsUrl}?api_key=${this.apiKey}`)
		.map(response => {
			return response.json().crew; 
		})	
	}

}