import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {LotteryEntity} from './lottery.entity';

@Injectable()
export class LotteryService {
  constructor(
    @InjectRepository(LotteryEntity) private readonly lotteryRepository: Repository<LotteryEntity>,
  ) {
  }

  async getActiveLottery() {
    return this.lotteryRepository.findOne({where: {status: true}});
  }

  async getWinnerLottery() {
    const lottery = await this.getActiveLottery();
    if (lottery.status && lottery.ticketWinner) {
      return lottery;
    }
    throw new NotFoundException('No hay ganador de ticket');
  }
}
