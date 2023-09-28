import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
const COMPONENTS = [
  MatButtonModule,
  MatIconModule,
  MatGridListModule,
  MatFormFieldModule,
  FormsModule,
  MatInputModule,
  MatDividerModule, 
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
