import { NestFactory } from '@nestjs/core';
import { PaxiumLambdaModule } from './paxium-lambda.module';

async function bootstrap() {
  const app = await NestFactory.create(PaxiumLambdaModule);
  await app.listen(3000);
}
bootstrap();
