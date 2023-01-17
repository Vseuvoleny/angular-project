import { Component } from '@angular/core';
import { Video, SortingOptions } from './types/card';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public videos: Video | null = null;
  public currentOption: SortingOptions | '' = '';
  public filterValue: string = '';

  public getOption(value: SortingOptions) {
    this.currentOption = value;
    this.sortVideos(this.videos);
  }

  public getFilterValue(value: string) {
    this.filterValue = value;
  }

  public sortVideos(currentVideos: Video | null) {
    if (
      currentVideos &&
      (this.currentOption === 'date' || this.currentOption === 'count of view')
    ) {
      currentVideos.items.sort((a: any, b: any) => {
        if (this.currentOption === 'date') {
          return (
            new Date(b.snippet.publishedAt).getTime() -
            new Date(a.snippet.publishedAt).getTime()
          );
        }
        if (this.currentOption === 'count of view') {
          return (
            Number(b.statistics.viewCount) - Number(a.statistics.viewCount)
          );
        } else return 1;
      });
    }
  }
}
