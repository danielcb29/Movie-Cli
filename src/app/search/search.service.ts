import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from 'rxjs';

@Injectable()
export class SearchService {

	/**
	* Tmdb enpoint to request people
	**/
	baseUrl: string = "https://api.themoviedb.org/3/search";
	/**
	* Daniel Api key to request tmdb api
	**/
	apiKey: string = "6dc0d2605088c01254ffedbd444bc2e4";


	constructor(private http: Http){}

	/**
	* Get result of search by given query
	* @return observable with object of: results and total results
	**/
	searchPeople(query: string): Observable<any>{
		let personUrl:string = '/person';
		return this.http.get(`${this.baseUrl}${personUrl}?api_key=${this.apiKey}&query=${query}`)
		.map(response => {
			let json = response.json();
			return {results: json.results, total:json.total_results} ; 
		})
	}
}