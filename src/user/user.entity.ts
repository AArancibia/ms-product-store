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
    name: 'contraseña',
    comment: 'Contraseña',
  })
  password: string;
}
