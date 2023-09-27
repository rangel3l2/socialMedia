import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';

const COMPONENTS = [
  MatIconModule,
  MatGridListModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    COMPONENTS,
  ]
})
export class MaterialModule { }
