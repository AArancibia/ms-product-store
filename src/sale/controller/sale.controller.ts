import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {SaleService} from "../service/sale.service";
import {SaleDto} from "../dto/sale.dto";

@Controller('sale')
export class SaleController {
    constructor(
        private saleSrv: SaleService
    ) {
    }

    @Post()
    async saveSale(@Body() saleDto: SaleDto) {
        return this.saleSrv.saveSale(saleDto);
    }

    @Get(':id')
    async getSale(@Param('id') id: string) {
        return this.saleSrv.getSale(id);
    }
}
