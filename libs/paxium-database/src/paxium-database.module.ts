import { Module } from '@nestjs/common';
import { PaxiumDatabaseService } from './paxium-database.service';

@Module({
  providers: [PaxiumDatabaseService],
  exports: [PaxiumDatabaseService],
})
export class PaxiumDatabaseModule {}
