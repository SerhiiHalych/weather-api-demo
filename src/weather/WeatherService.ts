import { Injectable } from '@nestjs/common';
import { WeatherDataProvider } from '../services/WeatherDataProvider';
import { CurrentWeatherDto } from './dto/CurrentWeatherDto';

@Injectable()
export class WeatherService {
  constructor(private weatherDataProvider: WeatherDataProvider) {}

  public async getCurrentWeather(city: string): Promise<CurrentWeatherDto> {
    const currentWeatherInfo = await this.weatherDataProvider.getCurrentWeather(
      city,
    );

    const roundTemperature = Math.round(currentWeatherInfo.main.temp);

    return {
      temp: roundTemperature,
    };
  }
}
