import { Injectable } from '@nestjs/common';
import { Prisma, Comment } from '@prisma/client';
import { PrismaService } from '../../../../../paxium-api/src/utils/modules/prisma/service/prisma.service';

@Injectable()
export class CommentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async _findUnique(
    args: Prisma.CommentFindUniqueArgs,
  ): Promise<Comment | null> {
    return await this.prisma.comment.findUnique(args);
  }

  async _findFirst(args: Prisma.CommentFindFirstArgs): Promise<Comment | null> {
    return await this.prisma.comment.findFirst(args);
  }

  async _count(args: Prisma.CommentCountArgs): Promise<number> {
    return await this.prisma.comment.count(args);
  }

  async _findFirstOrThrow(
    args: Prisma.CommentFindFirstOrThrowArgs,
  ): Promise<Comment | null> {
    return await this.prisma.comment.findFirstOrThrow(args);
  }

  async _findUniqueOrThrow(
    args: Prisma.CommentFindUniqueOrThrowArgs,
  ): Promise<Comment | null> {
    return await this.prisma.comment.findUniqueOrThrow(args);
  }

  async _findMany(args: Prisma.CommentFindManyArgs): Promise<Comment[]> {
    return await this.prisma.comment.findMany(args);
  }

  async _create(args: Prisma.CommentCreateArgs): Promise<Comment> {
    return await this.prisma.comment.create(args);
  }

  async _update(args: Prisma.CommentUpdateArgs): Promise<Comment> {
    return await this.prisma.comment.update(args);
  }

  async _upsert(args: Prisma.CommentUpsertArgs): Promise<Comment> {
    return await this.prisma.comment.upsert(args);
  }

  async _delete(args: Prisma.CommentDeleteArgs): Promise<Comment> {
    return await this.prisma.comment.delete(args);
  }
}
