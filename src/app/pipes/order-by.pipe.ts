import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'orderBy', pure: false})
export class OrderBy implements PipeTransform {


  transform(input:any, type, value): any{
    let property = value;
    let val_a_b;
    let val_b_a;
    if(type === '-'){
      val_a_b = -1;
      val_b_a = 1;
    }else{
      val_a_b = 1;
      val_b_a = -1;
      
    }
    let result = input.sort((a,b) => 
      {  
        if (a[property] > b[property]) 
        {
          return val_a_b;
        }
        if (a[property] < b[property]) 
        {
          return val_b_a;
        }
        return 0;
      });
    
    return result;

  }
}