import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SaleEntity } from './sale.entity';
import { ProductEntity } from '../../product/entity/product.entity.ts';

@Entity('detalleventa')
export class SaleDetailEntity {
  @PrimaryGeneratedColumn('uuid', {
    comment: 'Id del detalle de la venta',
    name: 'id',
  })
  id: string;

  @Column('double', {
    comment: 'Precio del producto en detalle de venta',
    name: 'precio'
  })
  price: number;

  @Column('int', {
    comment: 'Cantidad del producto en detalle de venta',
    name: 'cantidad'
  })
  quantity: string;

  @Column('uuid', {
    primary: true,
    comment: 'Llave primaria y foranea de tabla venta',
    name: 'saleId',
  })
  saleId: string;

  @ManyToOne(() => SaleEntity, (sale) => sale.saleDetail)
  @JoinColumn({
    name: 'saleId',
    referencedColumnName: 'id',
  })
  sale: SaleEntity;

  @Column('uuid', {
    primary: true,
    comment: 'Llave primaria y foranea de tabla venta',
    name: 'productId',
  })
  productId: string;

  @ManyToOne(() => ProductEntity, (product) => product.saleDetail)
  @JoinColumn({
    name: 'productId',
    referencedColumnName: 'id',
  })
  product: ProductEntity;
}
