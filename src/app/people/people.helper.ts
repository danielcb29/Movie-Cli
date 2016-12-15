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