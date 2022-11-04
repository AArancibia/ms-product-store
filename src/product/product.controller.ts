import {Body, Controller, Delete, Get, Param, Post, Query} from '@nestjs/common';
import {ProductService} from './product.service';
import {CreateProductDto} from './dto/create-product.dto';
import {FindProductParams} from "../utils/types/queries";

@Controller('products')
export class ProductController {

    constructor(
      private productSrv: ProductService,
    ) {}

    @Get()
    public async getProducts(@Query() productParams: FindProductParams) {
        return await this.productSrv.getProducts(productParams);
    }

    @Post('/create')
    public async addProduct(@Body() product: CreateProductDto) {
        return await this.productSrv.addProduct(product);
    }

    @Delete(':id')
    public async deleteProduct(@Param('id') id: string) {
        return await this.productSrv.deleteProduct(id);
    }
}
