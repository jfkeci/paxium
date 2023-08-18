import { Module } from '@nestjs/common';
import { PaxiumUtilsService } from './paxium-utils.service';

@Module({
  providers: [PaxiumUtilsService],
  exports: [PaxiumUtilsService],
})
export class PaxiumUtilsModule {}
