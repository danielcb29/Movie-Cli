import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class PeopleHelperService {

	constructor(){}

	/**
	* Using a double number, cast to 2 digits percent
	* @param {value} double to be cast 
	* @return two digits percent
	**/
	castFloatPercet(value: number): string {
		let castValue:string = "";
		if (value){
			castValue = value.toString().slice(0,4);	
		}
		return `${castValue}%`;
	}

	/**
	* Return a gender display by id
	* @param {id} id of gender
	* @return gender display
	**/
	getGenderDisplay(id: number): string{
		let result: string = "";
		switch (id) {
			case 1:
				result = "Female";
				break;
			
			case 2:
				result = "Male";
				break;

			default:
				result = "Unkown";
				break;
		}
		return result;
	}


}