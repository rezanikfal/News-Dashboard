import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map, switchMap } from "rxjs/operators";

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
        switchMap(params => this.http.get(this.url, {params})
        )
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