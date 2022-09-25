import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { UserService } from '../user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/user.entity';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './utils/LocalStrategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    PassportModule,
  ],
  controllers: [AuthController],
  providers: [
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService
    },
    {
      provide: 'USER_SERVICE',
      useClass: UserService,
    },
    LocalStrategy
  ]
})
export class AuthModule {}
