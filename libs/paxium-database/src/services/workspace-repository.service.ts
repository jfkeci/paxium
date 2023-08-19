import { Injectable } from '@nestjs/common';
import { Prisma, Workspace } from '@prisma/client';
import { PrismaService } from '../../../paxium-prisma-orm/src';

@Injectable()
export class WorkspaceRepository {
  constructor(private readonly prisma: PrismaService) {}

  async _findUnique(
    args: Prisma.WorkspaceFindUniqueArgs,
  ): Promise<Workspace | null> {
    return await this.prisma.workspace.findUnique(args);
  }

  async _findFirst(
    args: Prisma.WorkspaceFindFirstArgs,
  ): Promise<Workspace | null> {
    return await this.prisma.workspace.findFirst(args);
  }

  async _count(args: Prisma.WorkspaceCountArgs): Promise<number> {
    return await this.prisma.workspace.count(args);
  }

  async _findFirstOrThrow(
    args: Prisma.WorkspaceFindFirstOrThrowArgs,
  ): Promise<Workspace | null> {
    return await this.prisma.workspace.findFirstOrThrow(args);
  }

  async _findUniqueOrThrow(
    args: Prisma.WorkspaceFindUniqueOrThrowArgs,
  ): Promise<Workspace | null> {
    return await this.prisma.workspace.findUniqueOrThrow(args);
  }

  async _findMany(args: Prisma.WorkspaceFindManyArgs): Promise<Workspace[]> {
    return await this.prisma.workspace.findMany(args);
  }

  async _create(args: Prisma.WorkspaceCreateArgs): Promise<Workspace> {
    return await this.prisma.workspace.create(args);
  }

  async _update(args: Prisma.WorkspaceUpdateArgs): Promise<Workspace> {
    return await this.prisma.workspace.update(args);
  }

  async _upsert(args: Prisma.WorkspaceUpsertArgs): Promise<Workspace> {
    return await this.prisma.workspace.upsert(args);
  }

  async _delete(args: Prisma.WorkspaceDeleteArgs): Promise<Workspace> {
    return await this.prisma.workspace.delete(args);
  }
}
