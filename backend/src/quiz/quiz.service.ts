import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class QuizService {
  constructor(private readonly prisma: PrismaService) {}

  listByOwner(ownerId: string) {
    return this.prisma.test.findMany({ where: { ownerId }, include: { questions: true } });
  }
}
