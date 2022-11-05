import {Controller, Get, Query} from '@nestjs/common';
import {MailService} from './mail.service';

@Controller('mail')
export class MailController {

  constructor(
    private mailSrv: MailService,
  ) {
  }

  @Get()
  async plainTextEmail(@Query('toemail') toEmail: string) {
    // await this.mailSrv.confirmSale(toEmail);
  }
}
