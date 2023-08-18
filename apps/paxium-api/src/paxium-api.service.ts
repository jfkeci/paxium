import { Injectable } from '@nestjs/common';

@Injectable()
export class PaxiumApiService {
  getHello(): string {
    return 'Hello World!';
  }
}
