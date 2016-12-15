import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class AppHelperService {

	baseUrl: string = "http://image.tmdb.org/t/p/w300/";
	default:string = "assets/img/empty.png";
	constructor(){}

	getImgUrl(src: string): string {
		if(src){
			return `${this.baseUrl}${src}`;	
		}
		return this.default;
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

	isEmpty(list): boolean{
		let result: boolean = true;
		if(list){
			result = list.length == 0;
		}
		return result;
	}


}