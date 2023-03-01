import { Module } from '@nestjs/common';
import { WeatherDataProvider } from '../services/WeatherDataProvider';
import { WeatherController } from './WeatherController';
import { WeatherService } from './WeatherService';

@Module({
  imports: [],
  controllers: [WeatherController],
  providers: [WeatherDataProvider, WeatherService],
})
export class WeatherModule {}
