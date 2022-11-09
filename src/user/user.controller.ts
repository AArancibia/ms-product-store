import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {UserService} from './user.service';
import {UpdateUserDto} from "./dto/update-user.dto";
import {CreateUserDto} from "./dto/create-user.dto";

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

  @Get(':id/sales')
  async getSalesByUser(@Param('id') id: string) {
    return this.userSrv.getSalesByUserId(id);
  }

  @Post('register')
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userSrv.createUser(createUserDto);
  }

  @Put('update/:id')
  async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userSrv.updateUser(id, updateUserDto);
  }
}
