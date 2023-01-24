import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {TicketEntity} from './ticket.entity';
import {TicketDto} from './ticket.dto';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(TicketEntity) private readonly ticketRepository: Repository<TicketEntity>,
  ) {
  }

  async createTicket(ticketDto: TicketDto) {
    const ticket = await this.ticketRepository.create({
      ...ticketDto,
    });
    return await this.ticketRepository.save(ticket);
  }

}
