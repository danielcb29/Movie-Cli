import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from 'rxjs';

@Injectable()
export class PeopleDetailService {

	baseUrl: string = "https://api.themoviedb.org/3/person";
	apiKey: string = "6dc0d2605088c01254ffedbd444bc2e4";


	constructor(private http: Http){}

	getActorDetails(id: string): Observable<any>{
		return this.http.get(`${this.baseUrl}/${id}?api_key=${this.apiKey}`)
		.map(response => {
			return response.json(); 
		})
	}

	getCastActor(id: string): Observable<any>{
		let creditsUrl: string = '/movie_credits';
		return this.http.get(`${this.baseUrl}/${id}${creditsUrl}?api_key=${this.apiKey}`)
		.map(response => {
			return response.json().cast; 
		})	
	}

	getCrewActor(id: string): Observable<any>{
		let creditsUrl: string = '/movie_credits';
		return this.http.get(`${this.baseUrl}/${id}${creditsUrl}?api_key=${this.apiKey}`)
		.map(response => {
			return response.json().crew; 
		})	
	}

}