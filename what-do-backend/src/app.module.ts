import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { GroupsModule } from './groups/groups.module';
import { QuestionsModule } from './questions/questions.module';
import { UserLogsModule } from './user-logs/user-logs.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    QuestionsModule,
    UserLogsModule,
    GroupsModule,
    PrismaModule,
    UsersModule,
  ],
})
export class AppModule {}
