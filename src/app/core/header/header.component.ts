import { Component, EventEmitter, Output, Input } from '@angular/core';
import { SortingOptions } from '../../types/card';
import { FadeAnimation } from './header.types';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() currentOptionEmit = new EventEmitter();
  @Output() filterEmit = new EventEmitter();
  @Input() currentOption: SortingOptions | '' = '';

  public isSortHidden = true;
  public animation: FadeAnimation = 'fadeIn';

  /**
   * toggleSorting
   */
  public toggleSorting() {
    if (this.isSortHidden) {
      this.animation = 'fadeIn';
      this.isSortHidden = false;
    } else {
      this.animation = 'fadeOut';
      setTimeout(() => {
        this.isSortHidden = true;
      }, 500);
    }
  }

  public getOption(value: string) {
    this.currentOptionEmit.emit(value);
  }

  public getFilter(value: string) {
    this.filterEmit.emit(value);
  }
}
