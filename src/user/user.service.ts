import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {UserEntity} from './user.entity';
import {Repository} from 'typeorm';
import {encodePassword} from '../utils/Bcrypt';
import {UpdateUserDto} from "./dto/update-user.dto";
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export class UserService {
  constructor(
      @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
  ) {
  }

  async createUser(createdUser: CreateUserDto) {
    const password = encodePassword(createdUser.password);
    const newUser = this.userRepository.create({
      ...createdUser,
      password,
    });
    return this.userRepository.save(newUser);
  }

  async updateUser(id, updateUser: UpdateUserDto) {
    const userDB = await this.findById(id);
    if (userDB) {
      return this.userRepository.update({id: userDB.id}, {
        complete: true,
        lastName: updateUser.lastName,
        surname: updateUser.surname,
        telephone: updateUser.telephone,
        givenName: updateUser.givenName,
      });
    } else {
      throw new NotFoundException('No existe el usuario');
    }

  }

  async findUserByUsername(username: string) {
    return await this.userRepository.findOne({
      where: {username},
      relations: ['profiles', 'tickets']
    });
  }

  async findById(id: string, relations: string[] = []) {
    return await this.userRepository.findOne({where: {id}, relations});
  }

  async getSalesByUserId(id: string) {
    return await this.userRepository.createQueryBuilder('user')
      .leftJoinAndSelect('user.sales', 'sale')
      .leftJoinAndSelect('sale.saleDetail', 'detail')
      .leftJoinAndSelect('detail.product', 'product')
      .where('user.id = :id', {id})
      .getOne();
  }
}
