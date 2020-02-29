import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'common'
})
export class CommonPipe implements PipeTransform {

  transform(data: object[], searchTerm: string): any[] {
    if(!searchTerm)
    {
    return data;
    }
    else
    {
    return data.filter(studentid=>
      studentid["firstname"].toLowerCase().indexOf(searchTerm.toLowerCase())!==-1
   )
    }
    }
  }