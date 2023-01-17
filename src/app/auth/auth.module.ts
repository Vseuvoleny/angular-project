import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './pages/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../modules/material/material.module';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [AuthComponent],
})
export class AuthModule {}
