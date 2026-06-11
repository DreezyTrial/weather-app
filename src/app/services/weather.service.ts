import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getCurrentWeather(city: string): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}/weather?q=${city}&appid=${environment.apiKey}&units=metric`
    );
  }

  getForecast(city: string): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}/forecast?q=${city}&appid=${environment.apiKey}&units=metric`
    );
  }

  getWeatherByCoords(lat: number, lon: number): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}/weather?lat=${lat}&lon=${lon}&appid=${environment.apiKey}&units=metric`
    );
  }
}
