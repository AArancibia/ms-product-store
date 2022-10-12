import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {SaleEntity} from "../entity/sale.entity";
import {Repository} from "typeorm";
import {SaleDto} from "../dto/sale.dto";
import {SaleDetailEntity} from "../entity/sale-detail.entity";
import {ProductService} from "../../product/product.service";

@Injectable()
export class SaleService {
    constructor(
        @InjectRepository(SaleEntity) private saleRepository: Repository<SaleEntity>,
        @InjectRepository(SaleDetailEntity) private saleDetailRepository: Repository<SaleDetailEntity>,
        private productSrv: ProductService,
    ) {
    }

    async getSale(id: string) {
        return this.saleRepository.find({where: {id}});
    }

    async saveSale(saleDto: SaleDto) {
        const saleDetailEntity = [];
        for (const saleDetail of saleDto.saleDetail) {
            saleDetailEntity.push(this.saleDetailRepository.create({
                ...saleDetail,
                saleId: saleDto.id,
            }));
            const productEntities = await this.productSrv.getProducts({id: saleDetail.productId});
            if (productEntities.length) {
                const productEntity = productEntities[0];
                productEntity.quantity = productEntity.quantity - saleDetail.quantity;
                await this.productSrv.updateProduct(productEntity.id, {quantity: productEntity.quantity});
            }
        }
        const saleEntity = this.saleRepository.create({
            ...saleDto,
            code: String(Date.now()),
        });
        saleEntity.saleDetail = saleDetailEntity;
        return await this.saleRepository.save(saleEntity);
    }
}
