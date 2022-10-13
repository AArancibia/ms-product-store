export class ReportSaleRO {
  year: string;
  months: Array<ReportMonthSalesRO>;
}

export class ReportMonthSalesRO {
  month: number;
  venta: number;
}
