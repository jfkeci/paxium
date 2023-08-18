import { Controller, Get } from '@nestjs/common';
import { PaxiumLambdaService } from './paxium-lambda.service';

@Controller()
export class PaxiumLambdaController {
  constructor(private readonly paxiumLambdaService: PaxiumLambdaService) {}

  @Get()
  getHello(): string {
    return this.paxiumLambdaService.getHello();
  }
}
