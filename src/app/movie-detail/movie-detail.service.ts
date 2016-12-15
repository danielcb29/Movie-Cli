import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from 'rxjs';

@Injectable()
export class MovieDetailService {

	baseUrl: string = "https://api.themoviedb.org/3/movie";
	apiKey: string = "6dc0d2605088c01254ffedbd444bc2e4";


	constructor(private http: Http){}

	getMovieDetail(id: string): Observable<any>{
		return this.http.get(`${this.baseUrl}/${id}?api_key=${this.apiKey}`)
		.map(response => {
			return response.json(); 
		})
	}

	getMovieVideos(id: string): Observable<any>{
		let videoUrl: string = '/videos'; 
		return this.http.get(`${this.baseUrl}/${id}${videoUrl}?api_key=${this.apiKey}`)
		.map(response => {
			return response.json().results; 
		})	
	}
}