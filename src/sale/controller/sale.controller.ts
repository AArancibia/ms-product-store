import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {SaleService} from "../service/sale.service";
import {SaleDto} from '../dto/sale.dto';
import {SaleRO} from '../dto/sale.ro';

@Controller('sale')
export class SaleController {
    constructor(
        private saleSrv: SaleService
    ) {
    }

    @Post()
    async saveSale(@Body() saleDto: SaleDto) {
      const returnValue = {} as SaleRO;
      const sale = await this.saleSrv.saveSale(saleDto);
      Object.assign(returnValue, sale);
      return returnValue;
    }

    @Get(':id')
    async getSale(@Param('id') id: string) {
        return this.saleSrv.getSale(id);
    }

    @Post('/reporte')
    async report() {
        return this.saleSrv.report();
    }
}
