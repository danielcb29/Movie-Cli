import {Pipe} from "@angular/core";
import {PipeTransform} from "@angular/core";

@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {

    transform(value:string) {
        if (value != undefined) {
        	value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    }

}