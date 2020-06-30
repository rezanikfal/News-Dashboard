import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './forecast/forecast.component';
import { MaterialModule } from "../material/material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [ForecastComponent],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  exports:[
    ForecastComponent
  ]
})
export class WeatherModule { }
