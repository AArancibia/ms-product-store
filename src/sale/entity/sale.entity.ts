import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {SaleDetailEntity} from './sale-detail.entity';

@Entity('venta')
export class SaleEntity {
  @PrimaryGeneratedColumn('uuid', {
    comment: 'Id de la venta',
    name: 'id',
  })
  id: string;

  @Column('varchar', {
    comment: 'Código de la venta',
    name: 'code',
    nullable: true,
  })
  code: string;

  @Column('double precision', {
    name: 'precio_venta',
    comment: 'Precio de la venta',
  })
  salePrice: number;

  @Column('timestamp', {
    name: 'fecha_venta',
    comment: 'Fecha de la venta',
    default: new Date(),
  })
  dateRegister: Date;

  @OneToMany(
      () => SaleDetailEntity,
      (saleDetail) => saleDetail.sale,
      {cascade: true, eager: true, onDelete: "CASCADE"}
  )
  saleDetail: SaleDetailEntity[];

}
