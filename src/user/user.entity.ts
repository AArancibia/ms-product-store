import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
