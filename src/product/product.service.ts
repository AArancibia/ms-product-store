import {Injectable} from '@nestjs/common';
import {Repository} from 'typeorm';
import {ProductEntity} from './entity/product.entity.ts';
import {InjectRepository} from '@nestjs/typeorm';
import {CreateProductDto} from './dto/create-product.dto';
import {UpdateProductDto} from "./dto/update-product.dto";
import {FindProductParams} from "../utils/types/queries";

@Injectable()
export class ProductService {
  constructor(
      @InjectRepository(ProductEntity) private productRepository: Repository<ProductEntity>,
  ) {
  }

  async getProducts(fields: FindProductParams) {
    return await this.productRepository.findBy(fields);
  }

  async addProduct(product: CreateProductDto) {
    const entity = this.productRepository.create({
      ...product,
    });
    await this.productRepository.insert(entity);
  }

  async updateProduct(id: string, updateProduct: UpdateProductDto) {
    return this.productRepository.update({id}, {
      ...updateProduct,
    });
  }

  async deleteProduct(id: string) {
    return this.productRepository.delete(id);
  }
}
