import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { CardComponent } from './components/card/card.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { YouTubeRoutingModule } from './you-tube-routing.module';
import { DetailComponent } from './components/detail/detail.component';
import { IconsComponent } from './components/icons/icons.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared/shared.module';
import { FormCreateComponent } from './pages/form-create/form-create.component';
import { ErrorMessageComponent } from '../shared/components/error-message/error-message.component';

@NgModule({
  declarations: [
    MainComponent,
    CardComponent,
    DetailComponent,
    IconsComponent,
    FormCreateComponent,
    ErrorMessageComponent,
  ],
  exports: [MainComponent, CardComponent, DetailComponent, FormCreateComponent],
  imports: [
    CommonModule,
    MaterialModule,
    YouTubeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class YouTubeModule {}
