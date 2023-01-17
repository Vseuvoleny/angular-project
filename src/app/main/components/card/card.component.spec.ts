import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#borderColor', () => {
    it('should be undefined', () => {
      expect(component.borderColor).toBeUndefined();
    });
  });
  describe('#ngOnChanges', () => {
    it('should run fn if card is defined', () => {
      component.card = {
        kind: 'kind',
        etag: 'etag',
        id: {
          kind: 'kind',
          videoId: '1',
        },
        snippet: {
          publishedAt: 'piblish',
          publishTime: new Date(),
          channelId: 't',
          channelTitle: 't',
          title: 'title',
          description: 'description',
          liveBroadcastContent: 'content',
          thumbnails: {
            default: { url: 'url', width: 12, height: 12 },
            maxres: { url: 'url', width: 12, height: 12 },
            high: { url: 'url', width: 12, height: 12 },
            medium: { url: 'url', width: 12, height: 12 },
            standard: { url: 'url', width: 12, height: 12 },
          },
          localized: { description: 'des', title: 'tit' },
        },
        statistics: {
          viewCount: '11',
          likeCount: '11',
          dislikeCount: '11',
          favoriteCount: '11',
          commentCount: '1',
        },
      };
      const spyGetMonthDiff = spyOn(component, 'getMonthDiff');
      component.ngOnChanges();
      expect(spyGetMonthDiff).toHaveBeenCalledTimes(1);
    });
  });
});
