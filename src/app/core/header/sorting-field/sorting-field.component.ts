import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterService } from 'src/app/shared/services/filter.service';
import { SortService } from 'src/app/shared/services/sort.service';
import { Option, Status } from './sorting-field.types';

@Component({
  selector: 'app-sorting-field',
  templateUrl: './sorting-field.component.html',
  styleUrls: ['./sorting-field.component.scss'],
})
export class SortingFieldComponent {
  @Input() isSortHidden: boolean = true;
  @Input() currentOption: string = '';
  @Input() animation: string = 'fadeIn';

  constructor(
    private sortService: SortService,
    private filterService: FilterService,
  ) {}

  public inputValue: string = '';
  public sortingOptions: Option[] = [
    { title: 'date', active: false, status: 'idle' },
    { title: 'count of view', active: false, status: 'idle' },
  ];

  public changeFilter(event: string) {
    this.filterService.setFilterStream(event);
  }

  public setStatus(status: Status) {
    if (status === 'decrease') {
      status = 'idle';

      return status;
    }

    if (status === 'increase') {
      status = 'decrease';
      return status;
    }

    return 'increase';
  }

  public click(index: number) {
    this.sortingOptions.map((opt: Option, idx: number) => {
      if (idx === index) {
        opt.status = this.setStatus(opt.status);
        opt.active = opt.status === 'idle' ? false : true;
        this.sortService.setSortOption({
          sortType: opt.title,
          sortDirection: opt.status,
        });
        // this.optionEmit.emit(opt.title);
      } else {
        opt.status = 'idle';
        opt.active = false;
      }
    });
  }
}
