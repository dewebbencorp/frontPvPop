import { IonGrid, IonRow, IonCol } from "@ionic/react";
import useWithdrawals from "../hooks/useWithdrawals";

const TableCashDenominations: React.FC = () => {
  const { denominations, handleCashAmountChange } = useWithdrawals();

  return (
    <IonGrid className="w-full p-0 m-0">
      <IonRow className="bg-myFriend-600 text-white font-bold h-10 items-center rounded-t-lg">
        <IonCol className="text-center font-semibold text-[1rem]">
          Denominación
        </IonCol>
        <IonCol className="text-center font-semibold text-[1rem]">
          Cantidad
        </IonCol>
        <IonCol className="text-center font-semibold text-[1rem]">
          Total
        </IonCol>
      </IonRow>
      <div className="max-h-[240px] overflow-y-scroll rounded-b-lg">
        {denominations?.map((item:any, index:any) => (
          <IonRow key={index} className="bg-white h-10">
            <IonCol className="text-center">{item.denominacion}</IonCol>
            <IonCol className="text-center max-h-10 overflow-hidden">
              <input
                className="h-full !shadow-none w-3/4 text-center"
                type="number"
                value={item.cantidad}
                onChange={(e) => handleCashAmountChange(index, e.target.value)}
              />
            </IonCol>
            <IonCol className="text-center">{item.total}</IonCol>
          </IonRow>
        ))}
      </div>
    </IonGrid>
  );
};

export default TableCashDenominations;
