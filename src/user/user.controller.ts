import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private userSrv: UserService,
  ) {
  }

  @Get(':username')
  async getUser(@Param('username') username: string) {
    return this.userSrv.findUserByUsername(username);
  }

  @Post('register')
  async createUser(@Body() createUserDto) {
    return this.userSrv.createUser(createUserDto);
  }
}
