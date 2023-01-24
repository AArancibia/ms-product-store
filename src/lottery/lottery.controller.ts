import {Controller, Get} from '@nestjs/common';
import {LotteryService} from './lottery.service';

@Controller('sorteo')
export class LotteryController {
  constructor(
    private lotterySrv: LotteryService,
  ) {
  }

  @Get('active')
  async getActiveLottery() {
    return this.lotterySrv.getActiveLottery();
  }

  @Get('ticket/ganador')
  async getWinnerLottery() {
    return this.lotterySrv.getWinnerLottery();
  }
}
