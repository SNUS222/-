import { Injectable } from '@nestjs/common';

@Injectable()
export class GameService {
  computeScore(basePoints: number, responseMs: number, limitMs: number) {
    const speedMultiplier = Math.max(0.5, 1 + (limitMs - responseMs) / limitMs);
    return Math.round(basePoints * speedMultiplier);
  }
}
