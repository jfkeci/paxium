import { Injectable } from '@nestjs/common';
import { Prisma, Note } from '@prisma/client';
import { PrismaService } from '../../../paxium-prisma-orm/src';

@Injectable()
export class NoteRepository {
  constructor(private readonly prisma: PrismaService) {}

  async _findUnique(args: Prisma.NoteFindUniqueArgs): Promise<Note | null> {
    return await this.prisma.note.findUnique(args);
  }

  async _findFirst(args: Prisma.NoteFindFirstArgs): Promise<Note | null> {
    return await this.prisma.note.findFirst(args);
  }

  async _count(args: Prisma.NoteCountArgs): Promise<number> {
    return await this.prisma.note.count(args);
  }

  async _findFirstOrThrow(
    args: Prisma.NoteFindFirstOrThrowArgs,
  ): Promise<Note | null> {
    return await this.prisma.note.findFirstOrThrow(args);
  }

  async _findUniqueOrThrow(
    args: Prisma.NoteFindUniqueOrThrowArgs,
  ): Promise<Note | null> {
    return await this.prisma.note.findUniqueOrThrow(args);
  }

  async _findMany(args: Prisma.NoteFindManyArgs): Promise<Note[]> {
    return await this.prisma.note.findMany(args);
  }

  async _create(args: Prisma.NoteCreateArgs): Promise<Note> {
    return await this.prisma.note.create(args);
  }

  async _update(args: Prisma.NoteUpdateArgs): Promise<Note> {
    return await this.prisma.note.update(args);
  }

  async _upsert(args: Prisma.NoteUpsertArgs): Promise<Note> {
    return await this.prisma.note.upsert(args);
  }

  async _delete(args: Prisma.NoteDeleteArgs): Promise<Note> {
    return await this.prisma.note.delete(args);
  }
}
