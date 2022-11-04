import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryEntity } from '../../category/category.entity';
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
    name: 'precio_unitario'
  })
  unitPrice: number;

  @Column('int', {
    comment: 'Cantidad del producto',
    name: 'cantidad'
  })
  quantity: number;

  @Column('varchar', {
    comment: 'Imagen del producto',
    name: 'imagen',
    nullable: true,
  })
  image: string;

  @Column('uuid', {
    comment: 'Llave foranea de tabla categoria',
    name: 'categoria_id',
    nullable: true,
  })
  categoryId: string;

  @ManyToOne(
    () => CategoryEntity,
    (category) => category.products,
    {
      eager: true,
      nullable: true,
    }
  )
  @JoinColumn({
    name: 'categoria_id',
    referencedColumnName: 'id',
  })
  category: CategoryEntity;

  @OneToMany(() => SaleDetailEntity, (saleDetail) => saleDetail.sale)
  saleDetail: SaleDetailEntity[];
}
