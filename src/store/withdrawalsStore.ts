import { create } from 'zustand';
import IDocto from '../common/interfaces/IDoctos';
import ICashDenominations from '../common/interfaces/ICashDenominations';

interface WithdrawalsState {
  dataCollection: IDocto[];
  denominations: ICashDenominations[];
  
  totalDoctos: number;
  totalCash: number;
  
  availableDoctos: { nombre: string; tipoCambio: number }[];
  addNewRow: () => void;
  
  updateDocto: (index: number, field: keyof IDocto, value: any) => void;
  updateCashAmount: (index: number, value: any) => void;
  
  calculateTotalDoctos: () => void;
  calculateTotalCash: () => void;
}

export const withdrawalStore = create<WithdrawalsState>((set, get) => ({
  dataCollection: [],
  totalDoctos: 0,
  totalCash: 0,

  availableDoctos: [
    { nombre: "Dólares", tipoCambio: 16.5 },
    { nombre: "Euros", tipoCambio: 18.0 },
    { nombre: "Tarjeta Amex", tipoCambio: 1 },
    { nombre: "Tarjeta Visa", tipoCambio: 1 },
    { nombre: "Tarjeta Mastercard", tipoCambio: 1 },
  ],

  denominations: [
    { denominacion: 1000, cantidad: 0, total: 0 },
    { denominacion: 500, cantidad: 0, total: 0 },
    { denominacion: 200, cantidad: 0, total: 0 },
    { denominacion: 100, cantidad: 0, total: 0 },
    { denominacion: 50, cantidad: 0, total: 0 },
    { denominacion: 20, cantidad: 0, total: 0 },
    { denominacion: 10, cantidad: 0, total: 0 },
    { denominacion: 5, cantidad: 0, total: 0 },
    { denominacion: 2, cantidad: 0, total: 0 },
    { denominacion: 1, cantidad: 0, total: 0 },
    { denominacion: 0.5, cantidad: 0, total: 0 },
  ],


  addNewRow: () => {
    const newDocto: IDocto = {
      docto: '',
      tipoCambio: 0,
      monto: 0,
      referencia: '',
      importe: 0,
    };
    set((state) => ({
      dataCollection: [...state.dataCollection, newDocto],
    }));
  },

  updateDocto: (index: number, field: keyof IDocto, value: any) => {
    const updatedData = [...get().dataCollection];
    const docto = updatedData[index];
  
    if (field === "docto") {
      const selectedDocto = get().availableDoctos.find((d) => d.nombre === value);
      if (selectedDocto) {
        docto.docto = selectedDocto.nombre;
        docto.tipoCambio = selectedDocto.tipoCambio;
      }
    } else if (field === "monto") {
      docto.monto = value;
      docto.importe = docto.monto * docto.tipoCambio;
    } else if (field === "referencia"){
      docto.referencia = value;
    }
  
    set({ dataCollection: updatedData });
  
    get().calculateTotalDoctos();
  },

  updateCashAmount: (index: number, value: any) => {
    const updatedDenominaciones = [...get().denominations];
    const cashAmount = updatedDenominaciones[index];

    cashAmount.cantidad = value;
    cashAmount.total = cashAmount.cantidad * cashAmount.denominacion;

    set({ denominations: updatedDenominaciones });

    get().calculateTotalCash();
  },

  calculateTotalDoctos: () => {
    const total = get().dataCollection.reduce((acc, item) => acc + item.importe, 0);
    set({ totalDoctos: total });
  },

  calculateTotalCash: () => {
    const total = get().denominations.reduce((acc:any, item:any) => acc + item.total, 0);
    set({ totalCash: total });
  },
}));
