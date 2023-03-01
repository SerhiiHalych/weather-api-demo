import { Module } from '@nestjs/common';
import { WeatherModule } from './weather/WeatherModule';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [WeatherModule, ConfigModule.forRoot()],
})
export class AppModule {}
