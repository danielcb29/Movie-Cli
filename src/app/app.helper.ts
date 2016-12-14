import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class AppHelperService {

	baseUrl: string = "http://image.tmdb.org/t/p/w300/";

	constructor(){}

	getImgUrl(src: string): string {
		return `${this.baseUrl}${src}`;
	}

	getNamesList(list: Object[]): string[]{
		let result: string[] = []
		if(list){
			for(let object of list){
				result.push(object['name']);
			}	
		}
		return result;
	}


}