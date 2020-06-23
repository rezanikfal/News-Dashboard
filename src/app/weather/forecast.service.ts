import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { map, switchMap, pluck, mergeMap, filter, toArray } from "rxjs/operators";

interface OpenWeatherResponse {
  list: {
    main: {
      temp: number
    },
    dt_txt: string
  }[]
}

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private url = 'https://api.openweathermap.org/data/2.5/forecast'

  constructor(private http: HttpClient) { }

  getForecast() {
    return this.getCurrentLocation()
      .pipe(
        map(coords => {
          return new HttpParams()
            .set('lat', String(coords.latitude))
            .set('lon', String(coords.longitude))
            .set('units', 'metric')
            .set('appid', '8b2b98ac09805bc077428235701c84be')
        }),
        switchMap(params => this.http.get<OpenWeatherResponse>(this.url, { params })
        ),
        pluck('list'),
        mergeMap(listOfRecords => of(...listOfRecords)),
        filter((value, index) => index % 8 === 0),
        map(value=>{
          return{
            dateString: value.dt_txt,
            temp:value.main.temp
          }
        }),
        toArray()
      )
  }

  getCurrentLocation() {
    return new Observable<Coordinates>(observer => {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          observer.next(position.coords)
          observer.complete()
        },
        err => observer.error(err)
      )
    })
  }
}