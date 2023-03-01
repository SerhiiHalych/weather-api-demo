import { ApiProperty } from '@nestjs/swagger';

export class CurrentWeatherDto {
  @ApiProperty()
  temp: number;
}
