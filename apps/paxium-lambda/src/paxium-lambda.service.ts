import { Injectable } from '@nestjs/common';

@Injectable()
export class PaxiumLambdaService {
  getHello(): string {
    return 'Hello World!';
  }
}
