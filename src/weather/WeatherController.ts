import { Controller, Get, Query } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { CurrentWeatherDto } from './dto/CurrentWeatherDto';
import { WeatherService } from './WeatherService';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('current')
  @ApiResponse({ type: CurrentWeatherDto, status: 200 })
  getCurrentWeather(@Query('city') city: string): Promise<CurrentWeatherDto> {
    return this.weatherService.getCurrentWeather(city);
  }
}
