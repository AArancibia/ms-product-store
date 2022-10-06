import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryEntity } from '../../category/category.entity';
import { SaleEntity } from '../../sale/entity/sale.entity';
import { SaleDetailEntity } from '../../sale/entity/sale-detail.entity';

@Entity('producto')
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid', {
    comment: 'Id del producto',
    name: 'id',
  })
  id: string;

  @Column('varchar', {
    comment: 'Nombre del producto',
    name: 'nombre'
  })
  name: string;

  @Column('double precision', {
    comment: 'Precio unitario del producto',
    name: 'precioUnitario'
  })
  unitPrice: number;

  @Column('int', {
    comment: 'Cantidad del producto',
    name: 'cantidad'
  })
  quantity: string;

  @Column('varchar', {
    comment: 'Imagen del producto',
    name: 'imagen',
    nullable: true,
  })
  image: string;

  @ManyToOne(
    () => CategoryEntity,
    (category) => category.products,
    {
      eager: true,
    }
  )
  category: CategoryEntity;

  @OneToMany(() => SaleDetailEntity, (saleDetail) => saleDetail.sale)
  saleDetail: SaleDetailEntity[];
}
