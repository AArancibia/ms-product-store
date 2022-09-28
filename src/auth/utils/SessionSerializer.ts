import { PassportSerializer } from '@nestjs/passport';
import { Inject } from '@nestjs/common';
import { UserService } from '../../user/user.service';

export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject('USER_SERVICE') private userSrv: UserService,
  ) {
    super();
  }

  async deserializeUser(payload: any, done: Function) {
    const userDB = this.userSrv.findById(payload.id);
    return userDB ? done(null, userDB) : done(null, null);
  }

  serializeUser(user: any, done: Function) {
    done(null, user);
  }


}
