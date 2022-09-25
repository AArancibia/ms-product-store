import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from '../product/entity/product.entity.ts';

@Entity('categoria')
export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
    comment: 'Id de categoria'
  })
  id: string;

  @Column('varchar', {
    name: 'nombre',
    comment: 'Nombre de la categoria'
  })
  name: string;

  @OneToMany(
    () => ProductEntity,
    (product) => product.category,
  )
  products: ProductEntity[];
}
