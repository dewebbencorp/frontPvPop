import { useEffect } from 'react';
import { reconciliationStore } from '../../../store/reconciliationStore';

const useReconciliation = () => {
  const dataCollection = reconciliationStore((state) => state.dataCollection);
  const totalDoctos = reconciliationStore((state) => state.totalDoctos);
  const availableDoctos = reconciliationStore((state) => state.availableDoctos);
  const addNewRow = reconciliationStore((state) => state.addNewRow);
  const updateDocto = reconciliationStore((state) => state.updateDocto);
  const updateCashAmountChange = reconciliationStore((state) => state.updateCashAmount)
  const calculateTotalDifference = reconciliationStore((state) => state.calculateTotalDifference)

  const denominations = reconciliationStore((state) => state.denominations);
  const totalCash = reconciliationStore((state) => state.totalCash);
  const totalDifference = reconciliationStore((state) => state.totalDifference)
  const totalCheckout = reconciliationStore((state) => state.totalCheckout)
  const totalBonus = reconciliationStore((state) => state.totalBonus)

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

  useEffect(() => {
    calculateTotalDifference();
  }, [dataCollection, denominations]);
  
  return {
    dataCollection,
    totalDoctos,
    availableDoctos,
    denominations,
    totalCash,
    totalDifference,
    totalCheckout,
    totalBonus,
    addNewRow,
    handleDoctoChange,
    handleCashAmountChange,

    handleCantidadChange,
    handleReferenciaChange,
  };
};

export default useReconciliation;
