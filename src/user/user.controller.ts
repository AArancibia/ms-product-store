import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private userSrv: UserService,
  ) {
  }

  @Post('create')
  async createUser(@Body() createUserDto) {
    return this.userSrv.createUser(createUserDto);
  }
}
