import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeFecha'
})
export class PipeFechaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
