import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchName: string): any {
    const modulesArray: any[] = [];
    for(let i=0;i<value.length;i++) {
      let moduleName: string = value[i].toUpperCase();
      if(moduleName.includes(searchName.toUpperCase())) {
        modulesArray.push(value[i]);
      }
    }
    return modulesArray;
  }

}
