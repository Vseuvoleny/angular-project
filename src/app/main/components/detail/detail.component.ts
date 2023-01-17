import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fetchVideo } from '../../../store/actions/videos.actions';
import { getVideoById } from '../../../store/reducers/videos.reducer';
import { Store } from '@ngrx/store';
import { Item } from 'src/app/types/card';
import { AppState } from 'src/app/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  private currentId: string = '';
  public currentVideo$ = new Observable<Item>();

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.route.params.subscribe((e) => {
      this.currentId = e['id'];
    });
    this.store.dispatch(fetchVideo({ parameters: this.currentId }));
    this.currentVideo$ = this.store.select(getVideoById);
  }
}
