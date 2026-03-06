import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { QuizModule } from './quiz/quiz.module';
import { GameModule } from './game/game.module';
import { RealtimeGateway } from './realtime/realtime.gateway';
import { PrismaService } from './common/prisma.service';
import { QueueModule } from './queue/queue.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot([{ ttl: 60000, limit: 120 }]),
    AuthModule,
    QuizModule,
    GameModule,
    QueueModule
  ],
  providers: [PrismaService, RealtimeGateway, { provide: APP_GUARD, useClass: ThrottlerGuard }]
})
export class AppModule {}
