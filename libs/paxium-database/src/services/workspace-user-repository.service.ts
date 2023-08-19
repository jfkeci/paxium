import { Injectable } from '@nestjs/common';
import { Prisma, WorkspaceUser } from '@prisma/client';
import { PrismaService } from '../../../paxium-prisma-orm/src';

@Injectable()
export class WorkspaceUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async _findUnique(
    args: Prisma.WorkspaceUserFindUniqueArgs,
  ): Promise<WorkspaceUser | null> {
    return await this.prisma.workspaceUser.findUnique(args);
  }

  async _findFirst(
    args: Prisma.WorkspaceUserFindFirstArgs,
  ): Promise<WorkspaceUser | null> {
    return await this.prisma.workspaceUser.findFirst(args);
  }

  async _count(args: Prisma.WorkspaceUserCountArgs): Promise<number> {
    return await this.prisma.workspaceUser.count(args);
  }

  async _findFirstOrThrow(
    args: Prisma.WorkspaceUserFindFirstOrThrowArgs,
  ): Promise<WorkspaceUser | null> {
    return await this.prisma.workspaceUser.findFirstOrThrow(args);
  }

  async _findUniqueOrThrow(
    args: Prisma.WorkspaceUserFindUniqueOrThrowArgs,
  ): Promise<WorkspaceUser | null> {
    return await this.prisma.workspaceUser.findUniqueOrThrow(args);
  }

  async _findMany(
    args: Prisma.WorkspaceUserFindManyArgs,
  ): Promise<WorkspaceUser[]> {
    return await this.prisma.workspaceUser.findMany(args);
  }

  async _create(args: Prisma.WorkspaceUserCreateArgs): Promise<WorkspaceUser> {
    return await this.prisma.workspaceUser.create(args);
  }

  async _update(args: Prisma.WorkspaceUserUpdateArgs): Promise<WorkspaceUser> {
    return await this.prisma.workspaceUser.update(args);
  }

  async _upsert(args: Prisma.WorkspaceUserUpsertArgs): Promise<WorkspaceUser> {
    return await this.prisma.workspaceUser.upsert(args);
  }

  async _delete(args: Prisma.WorkspaceUserDeleteArgs): Promise<WorkspaceUser> {
    return await this.prisma.workspaceUser.delete(args);
  }
}
