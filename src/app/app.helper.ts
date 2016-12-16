import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class AppHelperService {

	/**
	* Url to get image from tmdb api
	**/
	baseUrl: string = "http://image.tmdb.org/t/p/w300/";
	/**
	* Url of default image
	**/
	default:string = "assets/img/empty.png";
	constructor(){}

	/**
	* Given a string, return the image url of tmdb api
	* Return the deafult image if src is null or undefined
	* @param {src} Value to cast a tmdb url
	* @return String with url set to tmdb format or default url
	**/
	getImgUrl(src: string): string {
		if(src){
			return `${this.baseUrl}${src}`;	
		}
		return this.default;
	}

	/**
	* Given a list of objects, return the property name of any object in list
	* @param {list} List of objects to get name property
	* @return List of strings with name property of any object of list
	**/
	getNamesList(list: Object[]): string[]{
		let result: string[] = []
		if(list){
			for(let object of list){
				result.push(object['name']);
			}	
		}
		return result;
	}

	/**
	* Check it list is empty
	* @param {list} list to be checked
	* @return boolean value of empty state
	**/
	isEmpty(list): boolean{
		let result: boolean = true;
		if(list){
			result = list.length == 0;
		}
		return result;
	}


}