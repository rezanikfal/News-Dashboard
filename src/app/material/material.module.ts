import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';


const MaterialComponents = [
  MatListModule,MatCardModule
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
