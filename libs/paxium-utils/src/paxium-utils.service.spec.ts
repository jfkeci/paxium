import { Test, TestingModule } from '@nestjs/testing';
import { PaxiumUtilsService } from './paxium-utils.service';

describe('PaxiumUtilsService', () => {
  let service: PaxiumUtilsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaxiumUtilsService],
    }).compile();

    service = module.get<PaxiumUtilsService>(PaxiumUtilsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
