import { Module } from '@nestjs/common';
import { PaxiumLambdaController } from './paxium-lambda.controller';
import { PaxiumLambdaService } from './paxium-lambda.service';

@Module({
  imports: [],
  controllers: [PaxiumLambdaController],
  providers: [PaxiumLambdaService],
})
export class PaxiumLambdaModule {}
