import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SaleEntity } from '../../sale/entity/sale.entity';

@Entity('envio')
export class DeliveryEntity {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
    comment: 'Llave primaria de la tabla',
  })
  id: string;

  @Column('varchar', {
    name: 'departamento',
    comment: 'Departamento donde se hara el envio'
  })
  department: string;

  @Column('varchar', {
    name: 'provincia',
    comment: 'Provincia donde se hara el envio'
  })
  province: string;

  @Column('varchar', {
    name: 'distrito',
    comment: 'Distrito donde se hara el envio'
  })
  district: string;

  @Column('varchar', {
    name: 'contacto',
    comment: 'Contacto de la persona'
  })
  contact: string;

  @Column('varchar', {
    name: 'telefono',
    comment: 'Telefono del contacto'
  })
  telephone: string;

  @Column('varchar', {
    name: 'direccion',
    comment: 'Direccion donde se hara el envio'
  })
  address: string;

  @Column('uuid', {
    comment: 'Llave foranea de tabla venta',
    name: 'saleId',
  })
  saleId: string;

  @OneToOne(() => SaleEntity, (sale) => sale.delivery)
  @JoinColumn({
    name: 'saleId',
    referencedColumnName: 'id',
  })
  sale: SaleEntity;
}
