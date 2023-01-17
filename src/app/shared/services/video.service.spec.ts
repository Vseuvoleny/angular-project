import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { VideoService } from './video.service';
import { HttpClientModule } from '@angular/common/http';

describe('VideoService', () => {
  let service: VideoService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [provideMockStore({})],
    });
    service = TestBed.inject(VideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
