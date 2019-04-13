import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exactSearch'
})
export class ExactSearchPipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any[] {
    if (!items) {
      return [];
    }
    if (!value || value.length === 0) {
      return items;
    }
    return items.filter((it) => {
      if (it[field] === undefined) {
        return it[field];
      }
      return it[field].toString().toLowerCase() === value.toLowerCase();
    });
  }


}
