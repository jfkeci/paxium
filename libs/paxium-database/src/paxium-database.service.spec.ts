import { Test, TestingModule } from '@nestjs/testing';
import { PaxiumDatabaseService } from './paxium-database.service';

describe('PaxiumDatabaseService', () => {
  let service: PaxiumDatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaxiumDatabaseService],
    }).compile();

    service = module.get<PaxiumDatabaseService>(PaxiumDatabaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
