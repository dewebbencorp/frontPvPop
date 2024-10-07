export interface PaymentMethod {
  total: number;
  currency: string; // 'MXN', 'USD', 'MIXTO'
  mxnAmount?: number;
  usdAmount?: number;
  cardAmount?: number;
  roomAmount?: number;
  change?: number;
  cardNumber?: string;
  roomNumber?: string;
}
