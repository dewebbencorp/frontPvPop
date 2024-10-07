export interface IPaymentMethod {
  total: number;
  currency: string;
  amount?: number;
  change?: number;
  cardNumber?: string;
  roomNumber?: string;
  mxnAmount?: number;
  usdAmount?: number;
  cardAmount?: number;
  roomAmount?: number;
}
