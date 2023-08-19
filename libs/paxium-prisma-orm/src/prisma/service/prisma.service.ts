import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log: JSON.parse(process.env.DB_PRISMA_LOGGER_ENABLED ?? 'false')
        ? ['query', 'info', `warn`, `error`]
        : [],
      errorFormat: 'minimal',
    });
  }

  async onModuleInit() {
    try {
      await this.$connect();
    } catch (error) {
      throw new Error(error);
    }
  }

  async onModuleDestroy() {
    try {
      await this.$disconnect();
    } catch (error) {
      throw new Error(error);
    }
  }
}
