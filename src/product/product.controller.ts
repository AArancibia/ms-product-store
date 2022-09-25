import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('product')
export class ProductController {

    constructor(
      private productSrv: ProductService,
    ) {}

    @Get()
    public async getProducts() {
        return await this.productSrv.getProducts();
    }

    @Post('/create')
    public async addProduct(@Body() product: CreateProductDto) {
        return await this.productSrv.addProduct(product);
    }
}
