import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../pipes/index';
import { SortPipe } from '../pipes/sort-pipe/sort.pipe';

@NgModule({
  declarations: [FilterPipe, SortPipe],
  imports: [CommonModule],
  exports: [FilterPipe, SortPipe],
})
export class SharedModule {}
