import { NestFactory } from '@nestjs/core';
import { PaxiumApiModule } from './paxium-api.module';

async function bootstrap() {
  const app = await NestFactory.create(PaxiumApiModule);
  await app.listen(3000);
}
bootstrap();
