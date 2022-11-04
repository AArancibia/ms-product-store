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

  @Column('double precision', {
    comment: 'Precio del producto en detalle de venta',
    name: 'precio'
  })
  price: number;

  @Column('int', {
    comment: 'Cantidad del producto en detalle de venta',
    name: 'cantidad'
  })
  quantity: number;

  @Column('uuid', {
    primary: true,
    comment: 'Llave primaria y foranea de tabla venta',
    name: 'venta_id',
  })
  saleId: string;

  @ManyToOne(() => SaleEntity, (sale) => sale.saleDetail)
  @JoinColumn({
    name: 'venta_id',
    referencedColumnName: 'id',
  })
  sale: SaleEntity;

  @Column('uuid', {
    primary: true,
    comment: 'Llave primaria y foranea de tabla venta',
    name: 'producto_id',
  })
  productId: string;

  @ManyToOne(
      () => ProductEntity,
      (product) => product.saleDetail,
      {eager: true}
  )
  @JoinColumn({
    name: 'producto_id',
    referencedColumnName: 'id',
  })
  product: ProductEntity;
}
