import { withdrawalStore } from '../../../store/withdrawalsStore';

const useWithdrawals = () => {
  const dataCollection = withdrawalStore((state) => state.dataCollection);
  const totalDoctos = withdrawalStore((state) => state.totalDoctos);
  const availableDoctos = withdrawalStore((state) => state.availableDoctos);
  const addNewRow = withdrawalStore((state) => state.addNewRow);
  const updateDocto = withdrawalStore((state) => state.updateDocto);
  const updateCashAmountChange = withdrawalStore((state) => state.updateCashAmount)

  const denominations = withdrawalStore((state) => state.denominations);
  const totalCash = withdrawalStore((state) => state.totalCash);

  const handleDoctoChange = (index: number, docto: string) => {
    updateDocto(index, 'docto', docto);
  };

  const handleCashAmountChange = (index: number, cashAmount: string) => {
    updateCashAmountChange(index, cashAmount )
  };
  
  const handleCantidadChange = (index: number, cantidad: number) => {
    updateDocto(index, 'monto', cantidad);
  };
  
  const handleReferenciaChange = (index: number, referencia: string) => {
    updateDocto(index, 'referencia', referencia);
  };
  
  return {
    dataCollection,
    totalDoctos,
    availableDoctos,
    denominations,
    totalCash,
    addNewRow,
    handleDoctoChange,
    handleCashAmountChange,

    handleCantidadChange,
    handleReferenciaChange,
  };
};

export default useWithdrawals;
