import {Injectable} from '@nestjs/common';
import {MailerService} from '@nestjs-modules/mailer';
import {User} from '../user/dto/user.dto';
import {ReportSaleDto} from '../sale/dto/report-sale.dto';

@Injectable()
export class MailService {
  constructor(
    private mailerSrv: MailerService,
  ) {
  }

  async confirmSale(user: User, {reportSales, totalPrice}: { reportSales: Array<ReportSaleDto>, totalPrice: number }) {
    await this.mailerSrv.sendMail({
      from: 'alexis2396@hotmail.com',
      to: user.email,
      subject: 'Gracias por tu compra!! Esperamos que vuelvas pronto a nuestra bodega! 😎🥰🍾',
      template: './sale',
      context: {
        user: user.givenName + ' ' + user.lastName + ' ' + user.surname,
        sales: reportSales,
        totalPrice,
      }
    });
  }
}
