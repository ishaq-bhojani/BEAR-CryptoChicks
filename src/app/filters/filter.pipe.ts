import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any[] {
    if (!items) {
      return [];
    }
    if (!value || value.length === 0) {
      return items;
    }
    return items.filter((item) => {
      const splitField = field.split(' ');
      if (splitField.length > 0) {
        for (const i of splitField) {
          if (item[i] && item[i].toString().replace(/\s/g, '').toLowerCase().indexOf(value.toLowerCase().replace(/\s/g, '')) !== -1) {
            return true;
          }
        }
      } else {
        if (!item[field]) {
          return item[field];
        }
        return item[field].toString().replace(/\s/g, '').toLowerCase().indexOf(value.toLowerCase().replace(/\s/g, '')) !== -1;
      }
      return false;
    });
  }

}
