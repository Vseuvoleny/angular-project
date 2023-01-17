import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/not-found.component';
import { MaterialModule } from '../modules/material/material.module';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, MaterialModule],
  exports: [NotFoundComponent],
})
export class NotFoundModule {}
