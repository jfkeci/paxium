import { Injectable } from '@nestjs/common';
import { Prisma, TaskAssignee } from '@prisma/client';
import { PrismaService } from '../../../paxium-prisma-orm/src';

@Injectable()
export class TaskAssigneeRepository {
  constructor(private readonly prisma: PrismaService) {}

  async _findUnique(
    args: Prisma.TaskAssigneeFindUniqueArgs,
  ): Promise<TaskAssignee | null> {
    return await this.prisma.taskAssignee.findUnique(args);
  }

  async _findFirst(
    args: Prisma.TaskAssigneeFindFirstArgs,
  ): Promise<TaskAssignee | null> {
    return await this.prisma.taskAssignee.findFirst(args);
  }

  async _count(args: Prisma.TaskAssigneeCountArgs): Promise<number> {
    return await this.prisma.taskAssignee.count(args);
  }

  async _findFirstOrThrow(
    args: Prisma.TaskAssigneeFindFirstOrThrowArgs,
  ): Promise<TaskAssignee | null> {
    return await this.prisma.taskAssignee.findFirstOrThrow(args);
  }

  async _findUniqueOrThrow(
    args: Prisma.TaskAssigneeFindUniqueOrThrowArgs,
  ): Promise<TaskAssignee | null> {
    return await this.prisma.taskAssignee.findUniqueOrThrow(args);
  }

  async _findMany(
    args: Prisma.TaskAssigneeFindManyArgs,
  ): Promise<TaskAssignee[]> {
    return await this.prisma.taskAssignee.findMany(args);
  }

  async _create(args: Prisma.TaskAssigneeCreateArgs): Promise<TaskAssignee> {
    return await this.prisma.taskAssignee.create(args);
  }

  async _update(args: Prisma.TaskAssigneeUpdateArgs): Promise<TaskAssignee> {
    return await this.prisma.taskAssignee.update(args);
  }

  async _upsert(args: Prisma.TaskAssigneeUpsertArgs): Promise<TaskAssignee> {
    return await this.prisma.taskAssignee.upsert(args);
  }

  async _delete(args: Prisma.TaskAssigneeDeleteArgs): Promise<TaskAssignee> {
    return await this.prisma.taskAssignee.delete(args);
  }
}
