import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {ProfileEntity} from '../profile/profile.entity';
import {SaleEntity} from '../sale/entity/sale.entity';

@Entity('usuario')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid', {
    comment: 'Id del usuario',
    name: 'id',
  })
  id: string;

  @Column('varchar', {
    name: 'usuario',
    comment: 'Usuario',
    unique: true,
  })
  username: string;

  @Column('varchar', {
    name: 'nombre',
    comment: 'Nombre del usuario',
    nullable: true,
  })
  givenName: string;

  @Column('varchar', {
    name: 'apellido paterno',
    comment: 'Apellido paterno del usuario',
    nullable: true,
  })
  lastName: string;

  @Column('varchar', {
    name: 'apellido materno',
    comment: 'Apellido materno del usuario',
    nullable: true,
  })
  surname: string;

  @Column('varchar', {
    name: 'telefono',
    comment: 'Telefono del usuario',
    nullable: true,
  })
  telephone: string;

  @Column('varchar', {
    name: 'contraseña',
    comment: 'Contraseña',
  })
  password: string;

  @Column('boolean', {
    name: 'completado',
    comment: 'Campo para saber si estan los datos completos',
    default: false,
  })
  complete: boolean;

  @Column('varchar', {
    name: 'correo',
    comment: 'Campo correo del usuario',
    nullable: true,
  })
  email: string;

  @OneToMany(() => SaleEntity, sale => sale.user)
  sales: Array<SaleEntity>;

  @OneToMany(() => ProfileEntity, profile => profile.user)
  profiles: Array<ProfileEntity>;
}
