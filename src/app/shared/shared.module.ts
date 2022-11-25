import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';

import { HeaderComponent } from './components/header/header.component';
import * as fromComponents  from './components';




@NgModule({
  declarations: [
    HeaderComponent,
    ...fromComponents.components
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ReactiveFormsModule,
    RouterModule,
    ...fromComponents.components
  ]
})
export class SharedModule { }
