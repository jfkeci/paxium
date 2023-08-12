import { ApiProperty } from '@nestjs/swagger';
import { IAppResponse } from '../interfaces/app-response.interface';

class ApiHealthcheckResponse {
  @ApiProperty({ description: 'App name' })
  app: string;

  @ApiProperty({ description: 'App environment' })
  env: string;

  @ApiProperty({ description: 'Current timestamp' })
  timestamp: string;
}

export class HealthcheckResponse implements IAppResponse {
  @ApiProperty({ default: 'healthcheck' })
  type: string;

  @ApiProperty({ default: 200 })
  code: number;

  @ApiProperty({ default: 'OK' })
  title: string;

  @ApiProperty({ type: ApiHealthcheckResponse })
  data: ApiHealthcheckResponse;
}
