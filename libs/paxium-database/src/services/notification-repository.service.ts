import { Injectable } from '@nestjs/common';
import { Prisma, Notification } from '@prisma/client';
import { PrismaService } from '../../../paxium-prisma-orm/src';

@Injectable()
export class NotificationRepository {
  constructor(private readonly prisma: PrismaService) {}

  async _findUnique(
    args: Prisma.NotificationFindUniqueArgs,
  ): Promise<Notification | null> {
    return await this.prisma.notification.findUnique(args);
  }

  async _findFirst(
    args: Prisma.NotificationFindFirstArgs,
  ): Promise<Notification | null> {
    return await this.prisma.notification.findFirst(args);
  }

  async _count(args: Prisma.NotificationCountArgs): Promise<number> {
    return await this.prisma.notification.count(args);
  }

  async _findFirstOrThrow(
    args: Prisma.NotificationFindFirstOrThrowArgs,
  ): Promise<Notification | null> {
    return await this.prisma.notification.findFirstOrThrow(args);
  }

  async _findUniqueOrThrow(
    args: Prisma.NotificationFindUniqueOrThrowArgs,
  ): Promise<Notification | null> {
    return await this.prisma.notification.findUniqueOrThrow(args);
  }

  async _findMany(
    args: Prisma.NotificationFindManyArgs,
  ): Promise<Notification[]> {
    return await this.prisma.notification.findMany(args);
  }

  async _create(args: Prisma.NotificationCreateArgs): Promise<Notification> {
    return await this.prisma.notification.create(args);
  }

  async _update(args: Prisma.NotificationUpdateArgs): Promise<Notification> {
    return await this.prisma.notification.update(args);
  }

  async _upsert(args: Prisma.NotificationUpsertArgs): Promise<Notification> {
    return await this.prisma.notification.upsert(args);
  }

  async _delete(args: Prisma.NotificationDeleteArgs): Promise<Notification> {
    return await this.prisma.notification.delete(args);
  }
}
