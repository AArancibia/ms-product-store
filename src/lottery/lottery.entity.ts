import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {TicketEntity} from '../ticket/ticket.entity';

@Entity('sorteo')
export class LotteryEntity {
  @PrimaryGeneratedColumn('uuid', {
    comment: 'Id del sorteo',
    name: 'id'
  })
  id: string;

  @Column('int', {
    comment: 'Numero del sorteo',
    name: 'correlativo',
    generated: 'increment'
  })
  correlative: number;

  @Column('timestamp', {
    name: 'fecha_sorteo',
    comment: 'Fecha del sorteo',
  })
  dateRegister: Date;

  @Column('smallint', {
    comment: 'Saldo del sorteo',
    name: 'saldo',
  })
  balance: number;

  @Column('smallint', {
    comment: 'Ticket ganador',
    name: 'ticket_ganador',
    nullable: true,
  })
  ticketWinner: string;

  @Column('boolean', {
    name: 'activo',
    comment: 'Estado del sorteo',
  })
  status: boolean;

  @OneToMany(
    () => TicketEntity,
    ticket => ticket.lottery,
    {
      eager: true,
    }
  )
  tickets: TicketEntity[];

}
