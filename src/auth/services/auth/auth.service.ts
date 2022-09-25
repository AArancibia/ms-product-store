import { Inject, Injectable } from '@nestjs/common';
import { UserService } from '../../../user/user.service';
import { comparePassword } from '../../../utils/Bcrypt';

@Injectable()
export class AuthService {

  constructor(
    @Inject('USER_SERVICE') private readonly userSrv: UserService
  ) {
  }

  async validateUser(username: string, password: string) {
    const userDB = await this.userSrv.findUserByUsername(username);
    if (userDB) {
      return comparePassword(password, userDB.password);
    }
    return null;
  }
}
