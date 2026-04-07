import { Controller, Get, Query } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('tests')
export class QuizController {
  constructor(private readonly quiz: QuizService) {}

  @Get()
  list(@Query('ownerId') ownerId: string) {
    return this.quiz.listByOwner(ownerId);
  }
}
