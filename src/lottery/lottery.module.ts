import {Module} from '@nestjs/common';
import {LotteryController} from './lottery.controller';
import {LotteryService} from './lottery.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {LotteryEntity} from './lottery.entity';

@Module({
  controllers: [LotteryController],
  providers: [LotteryService],
  imports: [
    TypeOrmModule.forFeature([LotteryEntity])
  ],
  exports: [LotteryService]
})
export class LotteryModule {
}
