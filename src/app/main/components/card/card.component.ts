import { Component, Input, OnChanges } from '@angular/core';
import { VideoItem } from '../../../types/card';
import { BorderColor } from './card.type';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnChanges {
  @Input() card: VideoItem | undefined = undefined;
  public borderColor: BorderColor = undefined;

  ngOnChanges(): void {
    if (this.card) {
      console.log(this.card);

      const { publishedAt } = this.card.snippet;
      const monthDiff = this.getMonthDiff(new Date(publishedAt));
      if (monthDiff === 0) {
        const dayDiff = this.getDayDiff(new Date(publishedAt));
        this.getColorByDays(dayDiff);
      } else {
        this.getColorByMonth(monthDiff);
      }
    }
  }

  public getMonthDiff(origin: Date) {
    const current = new Date();
    let months;
    months = (current.getFullYear() - origin.getFullYear()) * 12;
    months -= origin.getMonth() + 1;
    months += current.getMonth();
    return months <= 0 ? 0 : months;
  }

  public getDayDiff(origin: Date) {
    const current = new Date();
    const days = Math.ceil(
      Math.abs(current.getTime() - origin.getTime()) / (1000 * 3600 * 24),
    );

    return days;
  }

  public getColorByMonth(month: number) {
    if (month > 6) {
      this.borderColor = 'red';
    }
    if (month < 6 && month !== 0) {
      this.borderColor = 'yellow';
    }
  }

  public getColorByDays(days: number) {
    this.borderColor = days > 7 ? 'green' : 'blue';
  }
}
