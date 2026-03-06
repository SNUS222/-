import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../common/prisma.service';
import * as bcrypt from 'bcrypt';
import { LoginDto, RegisterDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService, private readonly jwt: JwtService) {}

  async register(dto: RegisterDto) {
    const hash = await bcrypt.hash(dto.password, 10);
    const user = await this.prisma.user.create({
      data: { email: dto.email, passwordHash: hash, displayName: dto.displayName }
    });
    return this.sign(user.id, user.email);
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const ok = await bcrypt.compare(dto.password, user.passwordHash);
    if (!ok) throw new UnauthorizedException('Invalid credentials');

    return this.sign(user.id, user.email);
  }

  private sign(sub: string, email: string) {
    return {
      accessToken: this.jwt.sign({ sub, email })
    };
  }
}
