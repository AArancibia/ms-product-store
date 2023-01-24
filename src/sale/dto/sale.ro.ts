import {TicketRO} from '../../ticket/ticket.ro';

export class SaleRO {
  id: string;
  salePrice: number;
  dateRegister: Date;
  saleDetail: SaleDetailRO[];
  ticket: TicketRO;
}

export class SaleDetailRO {
  id: string;
  price: number;
  quantity: number;
  productId: string;
}
