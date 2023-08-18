import { Test, TestingModule } from '@nestjs/testing';
import { PaxiumLambdaController } from './paxium-lambda.controller';
import { PaxiumLambdaService } from './paxium-lambda.service';

describe('PaxiumLambdaController', () => {
  let paxiumLambdaController: PaxiumLambdaController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PaxiumLambdaController],
      providers: [PaxiumLambdaService],
    }).compile();

    paxiumLambdaController = app.get<PaxiumLambdaController>(PaxiumLambdaController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(paxiumLambdaController.getHello()).toBe('Hello World!');
    });
  });
});
