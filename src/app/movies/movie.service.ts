import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from 'rxjs';
import { Genres } from './genres.mock';

@Injectable()
export class MovieService {

	baseUrl: string = "https://api.themoviedb.org/3/movie";
	apiKey: string = "6dc0d2605088c01254ffedbd444bc2e4";


	constructor(private http: Http){}

	getPopular(): Observable<any>{
		let urlPopular = '/popular';
		return this.http.get(`${this.baseUrl}${urlPopular}?api_key=${this.apiKey}`)
		.map(response => {
			return response.json().results; 
		})
	}

	getUpcoming(): Observable<any>{
		let urlUpcoming = '/upcoming';
		return this.http.get(`${this.baseUrl}${urlUpcoming}?api_key=${this.apiKey}`)
		.map(response => {
			return response.json().results; 
		})
	}

	getGenresName(ids: number[]): string[]{
		let result: string[] = []
		for(let id of ids){
			result.push(Genres[id]);
		}
		return result;
	}
}