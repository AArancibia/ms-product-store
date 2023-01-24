import {LotteryRO} from '../lottery/lottery.ro';

export class TicketRO {
  id: string;
  code: number;
  lottery: LotteryRO;
}
