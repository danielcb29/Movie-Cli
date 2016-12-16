import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from 'rxjs';

@Injectable()
export class PeopleService {

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
	* Get popular people of tmdb api
	* @return observable with results
	**/
	getPopular(): Observable<any>{
		let urlPopular = '/popular';
		return this.http.get(`${this.baseUrl}${urlPopular}?api_key=${this.apiKey}`)
		.map(response => {
			return response.json().results; 
		})
	}

}