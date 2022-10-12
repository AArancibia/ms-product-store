import { Module } from '@nestjs/common';
import { SaleController } from './controller/sale.controller';
import { SaleDetailController } from './controller/sale-detail.controller';
import { SaleService } from './service/sale.service';
import { SaleDetailService } from './service/sale-detail.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleEntity } from './entity/sale.entity';
import {SaleDetailEntity} from './entity/sale-detail.entity';
import {ProductModule} from "../product/product.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([SaleEntity, SaleDetailEntity]),
    ProductModule
  ],
  controllers: [SaleController, SaleDetailController],
  providers: [SaleService, SaleDetailService]
})
export class SaleModule {}
