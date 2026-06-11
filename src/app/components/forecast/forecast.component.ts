import { Component, effect, inject, input, signal } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.scss'
})
export class ForecastComponent {
  readonly city = input<string>('');
  readonly forecastData = signal<any[]>([]);
  readonly weatherService = inject(WeatherService);

  constructor() {
    effect(() => {
      const city = this.city();
      if (city) {
        this.weatherService.getForecast(city).subscribe((response) => {
          this.forecastData.set(response.list);
        });
      }
    });
  }
}
