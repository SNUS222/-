import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';

@Injectable()
export class QueueService {
  private readonly reportQueue = new Queue('reports', {
    connection: { url: process.env.REDIS_URL }
  });

  enqueueResultsExport(sessionId: string) {
    return this.reportQueue.add('export-results', { sessionId });
  }
}
