import { Test, TestingModule } from '@nestjs/testing';
import { PaxiumApiController } from './paxium-api.controller';
import { PaxiumApiService } from './paxium-api.service';

describe('PaxiumApiController', () => {
  let paxiumApiController: PaxiumApiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PaxiumApiController],
      providers: [PaxiumApiService],
    }).compile();

    paxiumApiController = app.get<PaxiumApiController>(PaxiumApiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(paxiumApiController.getHello()).toBe('Hello World!');
    });
  });
});
