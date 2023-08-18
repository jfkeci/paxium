import { Module } from '@nestjs/common';
import { PaxiumApiController } from './paxium-api.controller';
import { PaxiumApiService } from './paxium-api.service';

@Module({
  imports: [],
  controllers: [PaxiumApiController],
  providers: [PaxiumApiService],
})
export class PaxiumApiModule {}
