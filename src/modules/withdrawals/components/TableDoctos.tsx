import { IonGrid, IonRow, IonCol } from "@ionic/react";
import useWithdrawals from "../hooks/useWithdrawals";

const TableDoctos: React.FC = () => {
  const {
    dataCollection,
    availableDoctos,
    addNewRow,
    handleDoctoChange,
    handleCantidadChange,
    handleReferenciaChange,
  } = useWithdrawals();

  return (
    <IonGrid className="w-full p-0 m-0">
      <IonRow className="bg-myFriend-600 text-white font-bold h-10 items-center rounded-t-lg">
        <IonCol className="text-center font-semibold text-[1rem]">Docto</IonCol>
        <IonCol className="text-center font-semibold text-[1rem]">Monto</IonCol>
        <IonCol className="text-center font-semibold text-[1rem]">Referencia</IonCol>
        <IonCol className="text-center font-semibold text-[1rem]">Tipo C.</IonCol>
        <IonCol className="text-center font-semibold text-[1rem]">Importe</IonCol>
      </IonRow>
      <div className="max-h-[200px] overflow-y-scroll">
        {dataCollection.map((item, index) => (
          <IonRow key={index} className="bg-white h-10">
            <IonCol className="text-center !py-0">
              <select
                className="h-full !shadow-none w-3/4 text-center"
                onChange={(e) => handleDoctoChange(index, e.target.value)}
                value={item.docto}
              >
                <option value="" className="text-black">Seleccionar docto</option>
                {availableDoctos.map((docto, idx) => (
                  <option key={idx} value={docto.nombre}>
                    {docto.nombre}
                  </option>
                ))}
              </select>
            </IonCol>
            <IonCol className="text-center max-h-10 overflow-hidden">
              <input
                className="h-full !shadow-none w-3/4 text-center"
                type="number"
                value={item.monto}
                onChange={(e) => handleCantidadChange(index, Number(e.target.value))}
              />
            </IonCol>
            <IonCol className="text-center max-h-10 overflow-hidden">
              <input
                className="h-full !shadow-none w-3/4 text-center"
                type="text"
                placeholder="Notas"
                value={item.referencia}
                onChange={(e) => handleReferenciaChange(index, e.target.value)}
              />
            </IonCol>
            <IonCol className="text-center">{item.tipoCambio}</IonCol>
            <IonCol className="text-center">{item.importe.toFixed(2)}</IonCol>
          </IonRow>
        ))}
      </div>
      <IonCol className="text-center px-4 flex bg-myFriend-700 rounded-b-lg">
        <span
          className="uppercase font-bold text-white text-[0.75rem] px-2 py-1 tracking-[1vw] w-full"
          onClick={addNewRow}
        >
          Agregar Docto
        </span>
      </IonCol>
    </IonGrid>
  );
};

export default TableDoctos;
