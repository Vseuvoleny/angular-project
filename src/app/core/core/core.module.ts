import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from '../header/search/search.component';
import { UserIconComponent } from '../header/user-icon/user-icon.component';
import { SortingFieldComponent } from '../header/sorting-field/sorting-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { LogoComponent } from '../header/components/logo/logo.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    UserIconComponent,
    SortingFieldComponent,
    LogoComponent,
  ],
  exports: [HeaderComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
})
export class CoreModule {}
