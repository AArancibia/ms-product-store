import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { encodePassword } from '../utils/Bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
  ) { }

  async createUser(createdUser) {
    const password = encodePassword(createdUser.password);
    console.log(password);
    const newUser = this.userRepository.create({
      ...createdUser,
      password,
    });
    return this.userRepository.save(newUser);
  }

  async findUserByUsername(username: string) {
    return await this.userRepository.findOne({
      where: {username}
    });
  }
}
