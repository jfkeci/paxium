import { Injectable } from '@nestjs/common';
import { Prisma, Task } from '@prisma/client';
import { PrismaService } from '../../../paxium-prisma-orm/src';

@Injectable()
export class TaskRepository {
  constructor(private readonly prisma: PrismaService) {}

  async _findUnique(args: Prisma.TaskFindUniqueArgs): Promise<Task | null> {
    return await this.prisma.task.findUnique(args);
  }

  async _findFirst(args: Prisma.TaskFindFirstArgs): Promise<Task | null> {
    return await this.prisma.task.findFirst(args);
  }

  async _count(args: Prisma.TaskCountArgs): Promise<number> {
    return await this.prisma.task.count(args);
  }

  async _findFirstOrThrow(
    args: Prisma.TaskFindFirstOrThrowArgs,
  ): Promise<Task | null> {
    return await this.prisma.task.findFirstOrThrow(args);
  }

  async _findUniqueOrThrow(
    args: Prisma.TaskFindUniqueOrThrowArgs,
  ): Promise<Task | null> {
    return await this.prisma.task.findUniqueOrThrow(args);
  }

  async _findMany(args: Prisma.TaskFindManyArgs): Promise<Task[]> {
    return await this.prisma.task.findMany(args);
  }

  async _create(args: Prisma.TaskCreateArgs): Promise<Task> {
    return await this.prisma.task.create(args);
  }

  async _update(args: Prisma.TaskUpdateArgs): Promise<Task> {
    return await this.prisma.task.update(args);
  }

  async _upsert(args: Prisma.TaskUpsertArgs): Promise<Task> {
    return await this.prisma.task.upsert(args);
  }

  async _delete(args: Prisma.TaskDeleteArgs): Promise<Task> {
    return await this.prisma.task.delete(args);
  }
}
