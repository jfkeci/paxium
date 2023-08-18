import { Controller, Get } from '@nestjs/common';
import { PaxiumApiService } from './paxium-api.service';

@Controller()
export class PaxiumApiController {
  constructor(private readonly paxiumApiService: PaxiumApiService) {}

  @Get()
  getHello(): string {
    return this.paxiumApiService.getHello();
  }
}
