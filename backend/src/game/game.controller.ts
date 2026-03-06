import { Body, Controller, Post } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private readonly game: GameService) {}

  @Post('score')
  score(@Body() body: { basePoints: number; responseMs: number; limitMs: number }) {
    return { score: this.game.computeScore(body.basePoints, body.responseMs, body.limitMs) };
  }
}
