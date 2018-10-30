import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: any): number {

   

    let today:Date = new Date();
    // let dateCreated = value;

    let todayWithoutTime:any = new Date(today.getFullYear(),today.getMonth());

      return todayWithoutTime;
    
    // return days
  }

}
