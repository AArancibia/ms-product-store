import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from '../../utils/LocalAuthGuard';

@Controller('auth')
export class AuthController {
  constructor() { }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req) { }

}
