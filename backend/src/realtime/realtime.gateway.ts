import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: { origin: process.env.CORS_ORIGIN ?? '*' } })
export class RealtimeGateway {
  @WebSocketServer()
  server!: Server;

  @SubscribeMessage('join_game')
  handleJoin(@ConnectedSocket() client: Socket, @MessageBody() payload: { pin: string; nickname: string }) {
    client.join(payload.pin);
    this.server.to(payload.pin).emit('player_joined', payload.nickname);
    return { ok: true };
  }

  @SubscribeMessage('host_next')
  nextQuestion(@MessageBody() payload: { pin: string; questionIndex: number }) {
    this.server.to(payload.pin).emit('question_changed', payload.questionIndex);
  }
}
