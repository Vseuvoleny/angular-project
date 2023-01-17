import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterValue: string): any {
    if (filterValue.trim().length > 0 && value) {
      const filtered = value.items.filter((element: any) =>
        element.snippet.title.toLowerCase().includes(filterValue.toLowerCase()),
      );
      return filtered;
    } else return value;
  }
}
