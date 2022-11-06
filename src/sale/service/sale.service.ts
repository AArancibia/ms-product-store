import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {SaleEntity} from "../entity/sale.entity";
import {Repository} from "typeorm";
import {SaleDto} from "../dto/sale.dto";
import {SaleDetailEntity} from "../entity/sale-detail.entity";
import {ProductService} from "../../product/product.service";
import {ReportMonthSalesRO, ReportSaleRO} from "../response/report-sale.response";
import {Constants} from '../../utils/Constants';
import {MailService} from '../../mail/mail.service';
import {ReportSaleDto} from '../dto/report-sale.dto';

@Injectable()
export class SaleService {
  constructor(
    @InjectRepository(SaleEntity) private saleRepository: Repository<SaleEntity>,
    @InjectRepository(SaleDetailEntity) private saleDetailRepository: Repository<SaleDetailEntity>,
    private productSrv: ProductService,
    private mailSrv: MailService,
  ) {
  }

  async getSale(id: string) {
    return this.saleRepository.find({where: {id}});
  }

  async saveSale(saleDto: SaleDto) {
    const saleDetailEntity = [];
    const reportSales: Array<ReportSaleDto> = [];
    for (const saleDetail of saleDto.saleDetail) {
      const reportSale = new ReportSaleDto();
      reportSale.price = saleDetail.price;
      reportSale.quantity = saleDetail.quantity;
      saleDetailEntity.push(this.saleDetailRepository.create({
        ...saleDetail,
        saleId: saleDto.id,
      }));
      const productEntities = await this.productSrv.getProducts({id: saleDetail.productId});
      if (productEntities.length) {
        const productEntity = productEntities[0];
        productEntity.quantity = productEntity.quantity - saleDetail.quantity;
        await this.productSrv.updateProduct(productEntity.id, {quantity: productEntity.quantity});
        reportSale.description = productEntity.name;
      }
      reportSales.push(reportSale);
    }
    const saleEntity = this.saleRepository.create({
      ...saleDto,
      code: String(Date.now()),
    });
    saleEntity.saleDetail = saleDetailEntity;
    const sale = await this.saleRepository.save(saleEntity);
    await this.mailSrv.confirmSale(saleDto.user, {reportSales, totalPrice: saleDto.salePrice});
    return sale;
  }

  async report(): Promise<Array<ReportSaleRO>> {
    const sales = await this.saleRepository.find();
    const years = new Set(sales.map(x => x.dateRegister.getFullYear()));
    const reportSettings: Array<ReportSaleRO> = [];
    for (const year of years) {
      const months: Array<ReportMonthSalesRO> = [];
      for (let i = 0; i < 12; i++) {
        months.push({month: i, venta: 0});
      }
      reportSettings.push({year: String(year), months});
    }
    for (const sale of sales) {
      const reportSettingYear = reportSettings.find(x => x.year === String(sale.dateRegister.getFullYear()));
      const month = sale.dateRegister.getMonth();
      const reportSetting = reportSettingYear.months.find(x => x.month === month);
      reportSetting.venta += sale.salePrice;
    }
    for (const reportSetting of reportSettings) {
      reportSetting.months.forEach(x => x.month = Constants.MONTHS[x.month]);
    }
    return reportSettings;
  }
}
