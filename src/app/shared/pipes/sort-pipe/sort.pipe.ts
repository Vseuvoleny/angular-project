import { Pipe, PipeTransform } from '@angular/core';
import { SortOption } from 'src/app/types/sort';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: any[], sortOption: SortOption): unknown {
    if (Object.values(sortOption).length > 0) {
    }

    return value;
  }
}
