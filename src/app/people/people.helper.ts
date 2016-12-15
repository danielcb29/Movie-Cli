import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class PeopleHelperService {

	constructor(){}

	castFloatPercet(value: number): string {
		let castValue:string = "";
		if (value){
			castValue = value.toString().slice(0,4);	
		}
		return `${castValue}%`;
	}


}