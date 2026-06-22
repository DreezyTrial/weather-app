import { inject, Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { WeatherService } from './weather.service';

@Injectable({
  providedIn: 'root',
})
export class Geolocation {
  private readonly weatherService = inject(WeatherService);

  getCity(): Observable<string> {
    return new Observable<GeolocationPosition>((observer) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position);
          observer.complete();
        },
        (error) => {
          observer.error(error);
        }
      );
    }).pipe(
      switchMap((position) =>
        this.weatherService.getWeatherByCoords(
          position.coords.latitude,
          position.coords.longitude
        )
      ),
      map((weather) => weather.name)
    );
  }
}
