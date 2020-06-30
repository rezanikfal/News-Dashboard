import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';


const MaterialComponents = [
  MatListModule
];



@NgModule({
  declarations: [],
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
