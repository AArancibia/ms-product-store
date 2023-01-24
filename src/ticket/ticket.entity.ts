import {Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {LotteryEntity} from '../lottery/lottery.entity';
import {SaleEntity} from '../sale/entity/sale.entity';
import {UserEntity} from '../user/user.entity';

@Entity('ticket')
export class TicketEntity {
  @PrimaryGeneratedColumn('uuid', {
    comment: 'Id del ticket',
    name: 'id',
  })
  id: string;

  @Column('smallint', {
    comment: 'Código del ticket',
    name: 'code',
    generated: 'increment',
  })
  code: number;

  @Column('uuid', {
    comment: 'Id del sorteo',
    name: 'sorteo_id',
  })
  lotteryId: number;

  @ManyToOne(
    () => LotteryEntity,
    lottery => lottery.tickets,
  )
  @JoinColumn({
    name: 'sorteo_id',
    referencedColumnName: 'id',
  })
  lottery: LotteryEntity;

  @Column('uuid', {
    comment: 'Id del usuario',
    name: 'usuario_id',
    nullable: true,
  })
  userId: string;

  @ManyToOne(
    () => UserEntity,
    user => user.tickets,
  )
  @JoinColumn({
    name: 'usuario_id',
    referencedColumnName: 'id',
  })
  user: UserEntity;

  @OneToOne(() => SaleEntity, sale => sale.ticket, {eager: false})
  sale: SaleEntity;
}
