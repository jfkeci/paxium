import { Module } from '@nestjs/common';
import { PrismaModule } from '../../paxium-prisma-orm/src';
import { NoteRepository } from './services/note-repository.service';
import { UserRepository } from './services/user-repository.service';
import { TaskRepository } from './services/task-repository.service';
import { CommentRepository } from './services/comment-repository.service';
import { WorkspaceRepository } from './services/workspace-repository.service';
import { NotificationRepository } from './services/notification-repository.service';
import { TaskAssigneeRepository } from './services/task-assignee-repository.service';
import { WorkspaceUserRepository } from './services/workspace-user-repository.service';

@Module({
  imports: [PrismaModule],
  providers: [
    NoteRepository,
    TaskRepository,
    UserRepository,
    CommentRepository,
    WorkspaceRepository,
    NotificationRepository,
    TaskAssigneeRepository,
    WorkspaceUserRepository,
  ],
  exports: [
    NoteRepository,
    TaskRepository,
    UserRepository,
    CommentRepository,
    WorkspaceRepository,
    NotificationRepository,
    TaskAssigneeRepository,
    WorkspaceUserRepository,
  ],
})
export class PaxiumDatabaseModule {}
