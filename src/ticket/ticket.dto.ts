import {LotteryDto} from '../lottery/lottery.dto';
import {SaleDto} from '../sale/dto/sale.dto';

export class TicketDto {
  lottery: LotteryDto;
  sale: SaleDto;
  userId: string;
}
