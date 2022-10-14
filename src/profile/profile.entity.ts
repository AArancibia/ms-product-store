import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UserEntity} from "../user/user.entity";

@Entity('permiso')
export class ProfileEntity {
  @PrimaryGeneratedColumn('uuid', {
    comment: 'Id del permiso',
    name: 'id',
  })
  id: string;

  @Column('varchar', {
    name: 'description',
    comment: 'Descripcion del menu',
    unique: true,
  })
  description: string;

  @Column('varchar', {
    name: 'icon',
    comment: 'Icono del menu',
  })
  icon: string;

  @Column('varchar', {
    name: 'url',
    comment: 'url de la ruta',
  })
  url: string;

  @Column('uuid', {
    comment: 'Llave primaria y foranea de tabla usuario',
    name: 'userId',
  })
  userId: string;

  @ManyToOne(
      () => UserEntity, (user) => user.profiles
  )
  @JoinColumn({
    name: 'userId',
    referencedColumnName: 'id'
  })
  user: UserEntity;
}
