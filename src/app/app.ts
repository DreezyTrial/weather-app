import { Component, inject, signal } from '@angular/core';
import { SearchComponent } from './components/search/search.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { WeatherService } from './services/weather.service';
import { Geolocation } from './services/geolocation';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SearchComponent, CurrentWeatherComponent, ForecastComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  public isCelsius = signal<boolean>(true)
  selectedCity = signal<string>('');
  weatherService = inject(WeatherService);
  geolocationService = inject(Geolocation);

  constructor() {
    this.geolocationService.getCity().subscribe((city: string) => {
      this.selectedCity.set(city);
    });
  }
  onCitySelected(city: string) {
    this.selectedCity.set(city);
  }
  onGetLocation(){
    this.geolocationService.getCity().subscribe((city)=>{
      this.selectedCity.set(city)
    })
  }
}
