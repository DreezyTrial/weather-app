import { Component, signal } from '@angular/core';
import { SearchComponent } from './components/search/search.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { ForecastComponent } from './components/forecast/forecast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SearchComponent, CurrentWeatherComponent, ForecastComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  selectedCity = signal<string>('');

  onCitySelected(city: string) {
    this.selectedCity.set(city);
  }
}
