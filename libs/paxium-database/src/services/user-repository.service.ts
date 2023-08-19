import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from '../../../paxium-prisma-orm/src';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async _findUnique(args: Prisma.UserFindUniqueArgs): Promise<User | null> {
    return await this.prisma.user.findUnique(args);
  }

  async _findFirst(args: Prisma.UserFindFirstArgs): Promise<User | null> {
    return await this.prisma.user.findFirst(args);
  }

  async _count(args: Prisma.UserCountArgs): Promise<number> {
    return await this.prisma.user.count(args);
  }

  async _findFirstOrThrow(
    args: Prisma.UserFindFirstOrThrowArgs,
  ): Promise<User | null> {
    return await this.prisma.user.findFirstOrThrow(args);
  }

  async _findUniqueOrThrow(
    args: Prisma.UserFindUniqueOrThrowArgs,
  ): Promise<User | null> {
    return await this.prisma.user.findUniqueOrThrow(args);
  }

  async _findMany(args: Prisma.UserFindManyArgs): Promise<User[]> {
    return await this.prisma.user.findMany(args);
  }

  async _create(args: Prisma.UserCreateArgs): Promise<User> {
    return await this.prisma.user.create(args);
  }

  async _update(args: Prisma.UserUpdateArgs): Promise<User> {
    return await this.prisma.user.update(args);
  }

  async _upsert(args: Prisma.UserUpsertArgs): Promise<User> {
    return await this.prisma.user.upsert(args);
  }

  async _delete(args: Prisma.UserDeleteArgs): Promise<User> {
    return await this.prisma.user.delete(args);
  }
}
