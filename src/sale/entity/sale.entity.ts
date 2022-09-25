import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SaleDetailEntity } from './sale-detail.entity';
import { DeliveryEntity } from '../../delivery/entity/delivery.entity';

@Entity('venta')
export class SaleEntity {
  @PrimaryGeneratedColumn('uuid', {
    comment: 'Id de la venta',
    name: 'id',
  })
  id: string;

  @Column('double', {
    name: 'precioVenta',
    comment: 'Precio de la venta',
  })
  salePrice: number;

  @Column('timestamp', {
    name: 'fechaVenta',
    comment: 'Fecha de la venta',
  })
  dateRegister: Date;

  @OneToMany(() => SaleDetailEntity, (saleDetail) => saleDetail.sale)
  saleDetail: SaleDetailEntity[];

  @OneToOne(() => DeliveryEntity, (delivery) => delivery.sale)
  @JoinColumn({
    name: 'deliveryId',
    referencedColumnName: 'id',
  })
  delivery: DeliveryEntity;
}
