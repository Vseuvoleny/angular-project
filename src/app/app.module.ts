import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core/core.module';
import { YouTubeModule } from './main/you-tube.module';
import { MaterialModule } from './modules/material/material.module';
import { SharedModule } from './shared/shared/shared.module';
import { NotFoundModule } from './not-found/not-found.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { KeyInterceptor } from './shared/interceptor/key.interceptor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromVideos from './store/reducers/videos.reducer';
import { VideosEffects } from './store/effects/videos.effects';
import * as fromCustomCards from './store/reducers/custom-cards.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    YouTubeModule,
    SharedModule,
    HttpClientModule,
    NotFoundModule,
    StoreModule.forRoot({
      videos: fromVideos.reducer,
      cards: fromCustomCards.reducer,
    }),
    EffectsModule.forRoot([VideosEffects]),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: KeyInterceptor },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
