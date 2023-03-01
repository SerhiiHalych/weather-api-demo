import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { CurrentWeatherDto } from './dto/CurrentWeatherDto';
import { WeatherService } from './WeatherService';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('current')
  @ApiOkResponse({ type: CurrentWeatherDto })
  getCurrentWeather(@Query('city') city: string): Promise<CurrentWeatherDto> {
    return this.weatherService.getCurrentWeather(city);
  }
}
