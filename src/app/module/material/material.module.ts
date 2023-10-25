import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
// import { NgImageSliderModule } from 'ng-image-slider';

const modules=[
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatTabsModule,
  MatCardModule,
  // NgImageSliderModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ...modules
  ],
  exports:modules
})
export class MaterialModule { }
