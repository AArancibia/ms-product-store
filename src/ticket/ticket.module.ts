import {Module} from '@nestjs/common';
import {TicketController} from './ticket.controller';
import {TicketService} from './ticket.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {TicketEntity} from './ticket.entity';

@Module({
  controllers: [TicketController],
  providers: [TicketService],
  imports: [
    TypeOrmModule.forFeature([TicketEntity]),
  ],
  exports: [
    TicketService
  ]
})
export class TicketModule {
}
