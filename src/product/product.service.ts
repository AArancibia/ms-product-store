import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProductEntity } from './entity/product.entity.ts';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity) private productRepository: Repository<ProductEntity>,
  ) {}

  async getProducts() {
    return await this.productRepository.find();
  }

  async addProduct(product: CreateProductDto) {
     const entity = this.productRepository.create({
       ...product,
     });
     await this.productRepository.insert(entity);
  }
}
