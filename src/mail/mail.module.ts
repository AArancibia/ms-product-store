import {Module} from '@nestjs/common';
import {MailService} from './mail.service';
import {MailerModule} from '@nestjs-modules/mailer';
import {MailController} from './mail.controller';
import {join} from 'path';
import {HandlebarsAdapter} from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.sendgrid.net',
        secure: false,
        auth: {
          user: 'apikey',
          pass: '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'
        }
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter()
      }
    }),
  ],
  providers: [MailService],
  controllers: [MailController],
  exports: [MailService]
})
export class MailModule {
}
