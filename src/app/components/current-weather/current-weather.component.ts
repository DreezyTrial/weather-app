import { Component, effect, inject, input, signal } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.scss'
})
export class CurrentWeatherComponent {
  readonly city = input<string>('');
  readonly currentWeather = signal<any>({});
  readonly weatherService = inject(WeatherService);
  readonly isLoading = signal<boolean>(false);
  readonly errorMessage = signal<string>('');
  constructor() {
    effect(() => {
      this.isLoading.set(true);
      const city = this.city();
      if (city) {
        this.weatherService.getCurrentWeather(city).subscribe({
          next: (weather) => {
            this.currentWeather.set(weather);
            this.isLoading.set(false)
          },
          error: (error) => {
            this.errorMessage.set('City not found');
            this.isLoading.set(false)
          }
        });
      }
      else{
        this.errorMessage.set('Please enter a city');
        this.isLoading.set(false);
      }
    });
  }
}
