import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { WeatherApiCurrentWeatherResponse } from './dto/WeatherApiCurrentWeatherResponse';

@Injectable()
export class WeatherDataProvider {
  public async getCurrentWeather(
    city: string,
  ): Promise<WeatherApiCurrentWeatherResponse> {
    const apiKey = process.env.WEATHER_API_KEY;
    const unitsOfMeasurement = process.env.UNITS_OF_MEASUREMENT;

    const url = `https://api.openweathermap.org/data/2.5/weather`;

    const result = await axios.get<WeatherApiCurrentWeatherResponse>(url, {
      params: {
        appid: apiKey,
        q: city,
        units: unitsOfMeasurement,
      },
    });

    const { data } = result;

    return data;
  }
}
