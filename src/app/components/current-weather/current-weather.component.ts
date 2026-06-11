import { Component, effect, inject, input, signal } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.scss'
})
export class CurrentWeatherComponent {
  readonly city = input<string>('');
  readonly currentWeather = signal<any>({});
  readonly weatherService = inject(WeatherService);

  constructor() {
    effect(() => {
      const city = this.city();
      if (city) {
        this.weatherService.getCurrentWeather(city).subscribe((weather) => {
          this.currentWeather.set(weather);
        });
      }
    });
  }
}
